import type { TMultiOptions } from "react-synthwave";
import { useSynthMulti } from "react-synthwave";
import { useMothContext } from "@moth-state/Context";
import type { THandlerConfig } from "../tracks/cordyceptaera/types";

export const useBass5 = () => {
  const { context, master } = useMothContext();
  const multiSynth = useSynthMulti(context);

  const handler = ({
    startTime,
    pitch,
    duration,
    type = "sine",
    volume
  }: THandlerConfig) => {
    const filter = new BiquadFilterNode(context, {
      frequency: 1200,
      type: "lowpass",
    });
    const gain = new GainNode(context, { gain: volume ?? 0.02 });
    const options: TMultiOptions = {
      type,
      midi: 24 + (pitch ?? 0),
      count: 20,
      spread: 4,
      stagger: 0.1,
      decay: 0.01,
      start: startTime,
      end: startTime + (duration ?? 0.2),
      output: filter,
    };

    filter.frequency.linearRampToValueAtTime(
      10,
      startTime + (duration ?? 0),
    );
    //gain.gain.linearRampToValueAtTime(0, startTime + duration);

    filter.connect(gain);
    gain.connect(master);

    multiSynth.play(options);
  };

  return {
    play: handler,
    stop: stop.bind(multiSynth.stop),
  };
};
