import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../redux/useSelector";
import ReactPlayer, { ReactPlayerProps } from "react-player";
import { msToSeconds } from "../../../utils";
import { setCurrentTime } from "./../../../redux/actions/video";

const VIDEO_URL =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const Player: React.FC = React.memo(() => {
  const player = useRef<ReactPlayer>(null);

  const [duration, setDuration] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);

  const dispatch = useDispatch();

  const targetTimestamp = useSelector((state) => {
    const {
      timestamps: { selectedTimestamp },
    } = state;
    return selectedTimestamp?.timestamp;
  });

  useEffect(() => {
    if (!targetTimestamp) return;

    const targetTimestampInSeconds = msToSeconds(targetTimestamp);

    if (targetTimestampInSeconds > duration) return;

    isReady && player.current?.seekTo(targetTimestampInSeconds, "seconds");
  }, [targetTimestamp]);

  const handleDuration: ReactPlayerProps["onDuration"] = (duration) => {
    setDuration(duration);
  };

  const handleProgress: ReactPlayerProps["onProgress"] = (progress) => {
    dispatch(
      setCurrentTime({
        currentTime: progress.playedSeconds * 1000,
      })
    );
  };

  return (
    <ReactPlayer
      ref={player}
      url={VIDEO_URL}
      controls
      width={1280}
      height={720}
      onDuration={handleDuration}
      onProgress={handleProgress}
      onReady={() => setIsReady(true)}
    />
  );
});
