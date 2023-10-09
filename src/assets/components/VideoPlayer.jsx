import "../../../node_modules/video-react/dist/video-react.css";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton
} from 'video-react';

export function VideoPlayer ({video}) {
  return (
    <Player autoPlay src={video} >
      {/* <source src={video} /> */}

      <ControlBar autoHide={true}>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={10} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        {/* <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} /> */}
        <BigPlayButton position="center" />
        <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
  );
};

export default VideoPlayer