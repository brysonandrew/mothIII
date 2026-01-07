import { RED, LIGHT_GREY, PURPLE, BASIC_BLACK, BLACK } from "@constants/colors";
import styled from "@emotion/styled";
import { useContext } from "@state/Context";
import type { FC } from "react";
import { DoubleSide } from "three";
import { Text } from "@react-three/drei";
import { useViewportHeight } from "@hooks/useViewportHeight";
import { HEIGHT, WIDTH } from "../constants";

const Root = styled.div``;

export const Background: FC = () => {
  const { killRecord, start } = useContext();
  const viewportHeight = useViewportHeight();

  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[WIDTH, HEIGHT]} />
      <meshBasicMaterial
        color={BLACK}
        side={DoubleSide}
      />
    </mesh>
  );
};
