import React from "react";
import { Player } from "./Player";
import { Overlay } from "./Overlay";

export const Video: React.FC = React.memo(() => (
  <div className="col-10">
    <div className="video-wrapper">
      <Player />
      <Overlay />
    </div>
  </div>
));
