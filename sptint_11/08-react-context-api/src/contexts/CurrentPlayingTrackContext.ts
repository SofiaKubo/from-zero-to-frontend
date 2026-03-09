import React from 'react';
import { TrackModel } from '../models/Track';
type CurrentPlayingTrackContextValue = {
  currentPlayingTrack: TrackModel | null;
  setCurrentPlayingTrack: (track: TrackModel) => void;
};
export const CurrentPlayingTrackContext = React.createContext<CurrentPlayingTrackContextValue>({
  currentPlayingTrack: null,
  setCurrentPlayingTrack: () => {},
});
