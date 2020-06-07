import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "../../../redux/useSelector";

const VIDEO_URL =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const Player: React.FC = React.memo(() => {
  const player = useRef<any>(null);

  const targetTimestamp = useSelector((state) => {
    const {
      timestamps: { selectedTimestamp },
    } = state;
    return (selectedTimestamp && selectedTimestamp.timestamp) || 0;
  });

  useEffect(() => {
    console.log(player.current);
    //player.current && player.current.seekTo(targetTimestamp);
  }, [targetTimestamp]);

  return (
    <ReactPlayer
      ref={player}
      url={VIDEO_URL}
      controls
      width={1280}
      height={720}
    />
  );
});

/*import React, { Component } from "react";
import ReactPlayer from "react-player";

interface IProps {}

interface IState {}

class Player extends Component<IProps, IState> {
  player: any;
  constructor(props: IProps) {
    super(props);
    this.player = React.createRef();
  }
  render() {
    return (
      <ReactPlayer
        ref={this.player}
        controls
        width={1280}
        height={720}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    );
  }
}

export default Player;*/
