import { useEffect, useMemo, useState } from "react";

type Serializer<T> = (object: T | undefined) => string;
type Parser<T> = (val: string) => T | undefined;
export type TSetter<T> = React.Dispatch<
  React.SetStateAction<T | undefined>
>;

type TRewindHandler = () => void;

type Options<T> = Partial<{
  serializer: Serializer<T>;
  parser: Parser<T>;
  logger: (error: any) => void;
  syncData: boolean;
}>;

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  options?: Options<T>
): [T, TSetter<T>, TRewindHandler];
export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  options?: Options<T>
) {
  const opts = useMemo(
    () => ({
      serializer: JSON.stringify,
      parser: JSON.parse,
      logger: console.log,
      syncData: true,
      ...options,
    }),
    [options]
  );

  const { serializer, parser, logger, syncData } = opts;

  const [storedValue, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return defaultValue;

    try {
      const item = window.localStorage.getItem(key);
      const res: T = item ? parser(item) : defaultValue;
      return res;
    } catch (e) {
      logger(e);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateLocalStorage = () => {
      if (storedValue !== undefined) {
        window.localStorage.setItem(
          key,
          serializer(storedValue)
        );
      } else {
        window.localStorage.removeItem(key);
      }
    };

    try {
      updateLocalStorage();
    } catch (e) {
      logger(e);
    }
  }, [storedValue]);

  useEffect(() => {
    if (!syncData) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key !== key ||
        e.storageArea !== window.localStorage
      )
        return;

      try {
        const next = e.newValue
          ? parser(e.newValue)
          : undefined;

        setValue(next);
      } catch (e) {
        logger(e);
      }
    };

    if (typeof window === "undefined") return;

    window.addEventListener("storage", handleStorageChange);
    return () =>
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
  }, [key, syncData]);

  return [storedValue, setValue];
}
