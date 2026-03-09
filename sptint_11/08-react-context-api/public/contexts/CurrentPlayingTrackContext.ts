import { createContext } from 'react';
import { TrackModel } from '../../src/models/Track';

export interface CurrentPlayingTrackContextValue {
  currentPlayingTrack: TrackModel | null;
  setCurrentPlayingTrack: (track: TrackModel) => void;
}

export const CurrentPlayingTrackContext = createContext<CurrentPlayingTrackContextValue>({
  currentPlayingTrack: null,
  setCurrentPlayingTrack: () => {},
});
