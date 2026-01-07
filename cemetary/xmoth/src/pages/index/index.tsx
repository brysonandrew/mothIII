import { Shell } from "@components/shell";
import { Suspense } from "react";
import { Main } from "./main";
import { useContext } from "@state/Context";
import { Start } from "./start";

export const Index = () => {
  const { start } = useContext();

  return (
    <Suspense fallback={null}>
      {!start ? (
        <Start />
      ) : (
        <Shell>
          <Main />
        </Shell>
      )}
    </Suspense>
  );
};
