import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { Item } from "./Item";
import { TRACKS } from "./constants";
import { useTracks } from "./useTracks";
import type { TTrackKey } from "./types";
import { useStyles } from "@moth-css/useStyles";
import { useMothContext } from "@moth-state/Context";

const Root = styled(motion.div)``;
const List = styled(motion.ul)``;

export const Ost = () => {
  const { context } = useMothContext();
  useStyles();

  const [nowPlaying, setPlay] = useState<TTrackKey | null>(
    null,
  );

  const handlePlay = (name?: TTrackKey) => {
    if (typeof name === "string") {
      setPlay(name);
    } else {
      setPlay(null);
    }
  };

  const tracks = useTracks();

  const handleTap = (name: TTrackKey) => {
    if (typeof nowPlaying === "string") {
      tracks[nowPlaying].stop.bind(context);
      setPlay(null);
    } else {
      handlePlay(name);
      switch (name) {
        case "amynthasraptor": {
          tracks.amynthasraptor.play();
          break;
        }
        case "rhynchocephalia": {
          tracks.rhynchocephalia.play();
          break;
        }
        case "rezauutinumn": {
          tracks.rezauutinumn.play();
          break;
        }
        case "eukaryotchii": {
          tracks.eukaryotchii.play();
          break;
        }
        case "brachyurazoa": {
          tracks.brachyurazoa.play();
          break;
        }
        case "cordyceptaera": {
          tracks.cordyceptaera.play();
          break;
        }
        case "nautilus": {
          tracks.nautilus.play();
          break;
        }
        case "x": {
          tracks.x.play();
          break;
        }
        case "y": {
          tracks.y.play();
          break;
        }
        case "z": {
          tracks.z.play();
          break;
        }
        default: {
          tracks.koolasuchas.play();
        }
      }
    }
  };

  return (
    <Root className="flex items-center justify-center h-screen w-screen">
      <List className="p-4 shadow-teal-dark">
        {TRACKS.map((name, index) => (
          <Fragment key={name}>
            {index !== 0 && <li className="py-1" />}
            <Item
              name={name}
              isPlaying={name === nowPlaying}
              onTap={() => handleTap(name)}
            />
          </Fragment>
        ))}
      </List>
    </Root>
  );
};
