import { usePlay as useKoolasuchasPlay } from "@hooks/sounds/ost/koolasuchas/usePlay";
import { usePlay as useEukaryotchiiPlay } from "@hooks/sounds/ost/eukaryotchii/usePlay";
import { usePlay as useBrachyurazoaPlay } from "@hooks/sounds/ost/brachyurazoa/usePlay";
import { usePlay as useCordyceptaeraPlay } from "@hooks/sounds/ost/cordyceptaera/usePlay";
import { usePlay as useNautilusPlay } from "@hooks/sounds/ost/nautilus/usePlay";
import { usePlay as useVelociraptorPlay } from "@hooks/sounds/ost/velociraptor/usePlay";
import { usePlay as useRhynchocephaliaPlay } from "@hooks/sounds/ost/rhynchocephalia/usePlay";
import { usePlay as useWindRacePlay } from "@hooks/sounds/ost/wind-race/usePlay";

export const useTracks = () => {
  const handleKoolasuchasTap = useKoolasuchasPlay();
  const handleEukaryotchiiTap = useEukaryotchiiPlay();
  const handleBrachyurazoaTap = useBrachyurazoaPlay();
  const handleCordyceptaeraPlay = useCordyceptaeraPlay();
  const handleNautilusPlay = useNautilusPlay();
  const handleVelociraptorPlay = useVelociraptorPlay();
  const handleRhynchocephaliaPlay =
    useRhynchocephaliaPlay();
  const handleWindRacePlay = useWindRacePlay();

  return {
    koolasuchas: handleKoolasuchasTap,
    eukaryotchii: handleEukaryotchiiTap,
    brachyurazoa: handleBrachyurazoaTap,
    cordyceptaera: handleCordyceptaeraPlay,
    nautilus: handleNautilusPlay,
    velociraptor: handleVelociraptorPlay,
    rhynchocephalia: handleRhynchocephaliaPlay,
    "wind-race": handleWindRacePlay,
  };
};
