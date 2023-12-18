import { useAtaxia } from "@moth-hooks/sounds/ost/termini/useAtaxia";
import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";

export const usePhase10 = () => {
  const { context } = useMothContext();
  const ataxia = useAtaxia();

  const play = ({ duration, start }: TPlayerConfig) => {
    const pitch = 72 + 24;
    ataxia.play({
      startTime: context.currentTime + start,
      pitch: pitch - 24,
      duration: duration * 24,
      volume: 0.00002,
    });
  };
  return play;
};
