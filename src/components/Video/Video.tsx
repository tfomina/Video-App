import React from "react";
import { Player } from "./Player";

export const Video: React.FC = React.memo(() => (
  <div className="col-10">
    <Player />
  </div>
));
