import type { FC } from "react";
import { Left } from "./Left";
import { Right } from "./Right";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";

export const Octoman: FC<TBaseTagmataProps> = (props) => (
  <>
    {/* <Left {...props} span={-(props.span ?? 0)} /> */}
    <Right {...props} />
  </>
);