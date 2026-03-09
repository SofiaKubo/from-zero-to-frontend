import './styles.css';
import { useEffect, useState, useContext } from 'react';
import { TrackModel } from '../../models/Track';
import { CurrentPlayingTrackContext } from '../../contexts/CurrentPlayingTrackContext';

interface PlayPauseProps {
  track: TrackModel;
}

export const PlayPause = ({ track }: PlayPauseProps) => {
  const { currentPlayingTrack, setCurrentPlayingTrack } = useContext(CurrentPlayingTrackContext);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (currentPlayingTrack && currentPlayingTrack.id !== track.id) {
      setIsPlaying(false);
    }
  }, [currentPlayingTrack]);

  const onclick = () => {
    if (!currentPlayingTrack || currentPlayingTrack.id !== track.id) {
      setCurrentPlayingTrack(track);
      setIsPlaying(true);
    } else if (currentPlayingTrack && currentPlayingTrack.id === track.id && isPlaying) {
      setIsPlaying(false);
    } else if (currentPlayingTrack && currentPlayingTrack.id === track.id && !isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <button className="playPauseButton" onClick={onclick}>
      {isPlaying ? 'pause' : 'play'}
    </button>
  );
};
