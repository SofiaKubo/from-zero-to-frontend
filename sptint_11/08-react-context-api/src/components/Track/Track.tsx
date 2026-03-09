import './styles.css';
import clsx from 'clsx';
import { PlayPause } from '../PlayPauseButton/PlayPause';
import { TrackModel } from '../../models/Track';

export interface TrackProps {
  track: TrackModel;
}

export const Track = ({ track }: TrackProps) => {
  const { duration, id, title } = track;

  return (
    <div className={clsx('trackRoot', 'typo')}>
      <div className="trackId">{id}</div>
      <PlayPause track={track} />
      <div className={clsx('trackContent', 'typo')}>
        <div className="trackTitle">{title}</div>
        <div className="trackDurationContainer">
          <span className="trackDuration">{duration}</span>
        </div>
      </div>
    </div>
  );
};
