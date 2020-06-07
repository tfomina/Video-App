import React from "react";
import ReactPlayer from "react-player";

const VIDEO_URL =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const Video: React.FC = React.memo(() => (
  <div className="col-10">
    <ReactPlayer url={VIDEO_URL} controls width={1280} height={720} />
  </div>
));
