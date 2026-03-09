import './styles.css';
import { Track } from '../Track/Track';
import { TrackModel } from '../../models/Track';

interface TrackListProps {
  tracks: TrackModel[];
}

export const TrackList = ({ tracks }: TrackListProps) => {
  return (
    <div className="trackList">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};
