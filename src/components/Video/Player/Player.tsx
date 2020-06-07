import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "../../../redux/useSelector";
import { msToSeconds } from "../../../utils";

const VIDEO_URL =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const Player: React.FC = React.memo(() => {
  const player = useRef<ReactPlayer>(null);
  const [duration, setDuration] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  const targetTimestamp = useSelector((state) => {
    const {
      timestamps: { selectedTimestamp },
    } = state;
    return selectedTimestamp && selectedTimestamp.timestamp;
  });

  useEffect(() => {
    if (!targetTimestamp) return;

    const targetTimestampInSeconds = msToSeconds(targetTimestamp);

    if (targetTimestampInSeconds > duration) return;

    isReady &&
      player.current &&
      player.current.seekTo(targetTimestampInSeconds, "seconds");
  }, [targetTimestamp]);

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <ReactPlayer
      ref={player}
      url={VIDEO_URL}
      controls
      width={1280}
      height={720}
      onDuration={handleDuration}
      onReady={() => setIsReady(true)}
    />
  );
});
