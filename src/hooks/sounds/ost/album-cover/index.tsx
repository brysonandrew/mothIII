import { TRACKS } from "@moth-pages/ost/constants";

export const AlbumCover = () => (
    <div>
      <ul>
        {TRACKS.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </div>
  );
