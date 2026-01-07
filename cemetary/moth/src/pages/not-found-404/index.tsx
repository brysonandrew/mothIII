import { Shell } from "@components/shell";
import { Space } from "@components/spaces/Space";
import { TextLg } from "@components/text/TextLg";
import { TextXl } from "@components/text/TextXl";
import { useStyles } from "@hooks/useStyles";
import clsx from "clsx";

export const NotFound404 = () => {
  useStyles();
  return (
    <Shell>
      <div className={clsx("flex flex-col items-center")}>
        <Space />
        <TextXl>404</TextXl>
        <Space />
        <TextLg>Nothing Here</TextLg>
      </div>
    </Shell>
  );
};
