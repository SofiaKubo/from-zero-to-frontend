import { VideoPlayer } from '../components/VideoPlayer/VideoPlayer';
import { Button } from '../components/Button/Button';
import { useEffect, useRef } from 'react';
import './styles.css';

export const App = () => {
  const videoRef = useRef<VideoPlayer>(null);
  const playRef = useRef<Button>(null);

  useEffect(() => {
    if (playRef.current) {
      playRef.current.setFocus();
    }
  }, []);

  const onPlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.playVideo();
    }
  };

  const onPauseButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.pauseVideo();
    }
  };

  return (
    <div className="player-container">
      <div className="player-controls">
        <Button ref={playRef} text="Play" className="play-button" onClick={onPlayButtonClick} />
        <Button text="Pause" onClick={onPauseButtonClick} />
      </div>
      <VideoPlayer
        ref={videoRef}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        width="250"
        type="video/mp4"
      />
    </div>
  );
};
