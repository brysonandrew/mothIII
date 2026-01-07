import { Shell } from "@components/shell";
import { useStyles } from "@hooks/useStyles";
import { useMothContext } from "@state/Context";
import "virtual:windi.css";
import { Main } from "./main";
import { Start } from "./start";

export const Index = () => {
  const { start } = useMothContext();
  useStyles();
  return (
    <>
      {start ? (
        <Shell>
          <Main />
        </Shell>
      ) : (
        <Start />
      )}
    </>
  );
};
