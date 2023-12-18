import type { TPlayerConfig } from "@moth-hooks/sounds/ost/types";
import { useMothContext } from "@moth-state/Context";
import { useCymbal } from "../../../drums/useCymbal";
import { HIHAT_STEPS_1, HIHAT_VOLUME } from "../constants";

export const useHihat1 = () => {
  const cymbal = useCymbal();
  const { context } = useMothContext();

  const loop = ({ duration, start }: TPlayerConfig) => {
    [
      ...HIHAT_STEPS_1,
      ...HIHAT_STEPS_1,
      ...HIHAT_STEPS_1,
      ...HIHAT_STEPS_1,
    ].forEach((v, index, { length }) => {
      if (!v) return;
      const d = duration / length;
      cymbal.play({
        startTime: context.currentTime + index * d + start,
        volume: HIHAT_VOLUME,
        duration: d,
      });
    });
  };

  return loop;
};
