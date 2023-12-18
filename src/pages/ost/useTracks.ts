import { usePlay as useKoolasuchasPlay } from '@moth-hooks/sounds/ost/tracks/koolasuchas/usePlay';
import { usePlay as useEukaryotchiiPlay } from '@moth-hooks/sounds/ost/tracks/eukaryotchii/usePlay';
import { usePlay as useBrachyurazoaPlay } from '@moth-hooks/sounds/ost/tracks/brachyurazoa/usePlay';
import { usePlay as useCordyceptaeraPlay } from '@moth-hooks/sounds/ost/tracks/cordyceptaera/usePlay';
import { usePlay as useNautilusPlay } from '@moth-hooks/sounds/ost/tracks/nautilus/usePlay';
import { usePlay as useRhynchocephaliaPlay } from '@moth-hooks/sounds/ost/tracks/rhynchocephalia/usePlay';
import { usePlay as useAmynthasraptorPlay } from '@moth-hooks/sounds/ost/tracks/amynthasraptor/usePlay';
import { usePlay as useRezauutinumnPlay } from '@moth-hooks/sounds/ost/tracks/rezauutinumn/usePlay';
import { usePlay as useXPlay } from '@moth-hooks/sounds/hype/big-red-machine/usePlay';
import { usePlay as useYPlay } from '@moth-hooks/sounds/hype/ministry/usePlay';
import { usePlay as useZPlay } from '@moth-hooks/sounds/hype/pavlovich-taser-punch/usePlay';

export const useTracks = () => {
  const handleKoolasuchasTap = useKoolasuchasPlay();
  const handleEukaryotchiiTap = useEukaryotchiiPlay();
  const handleBrachyurazoaTap = useBrachyurazoaPlay();
  const handleCordyceptaeraPlay = useCordyceptaeraPlay();
  const handleNautilusPlay = useNautilusPlay();
  const handleRezauutinumnPlay = useRezauutinumnPlay();
  const handleRhynchocephaliaPlay =
    useRhynchocephaliaPlay();
  const handleAmynthasraptorPlay = useAmynthasraptorPlay();
  const handleX = useXPlay();
  const handleY = useYPlay();
  const handleZ = useZPlay();

  return {
    koolasuchas: handleKoolasuchasTap,
    eukaryotchii: handleEukaryotchiiTap,
    brachyurazoa: handleBrachyurazoaTap,
    cordyceptaera: handleCordyceptaeraPlay,
    nautilus: handleNautilusPlay,
    rezauutinumn: handleRezauutinumnPlay,
    rhynchocephalia: handleRhynchocephaliaPlay,
    amynthasraptor: handleAmynthasraptorPlay,
    x: handleX,
    y: handleY,
    z: handleZ,
  };
};
