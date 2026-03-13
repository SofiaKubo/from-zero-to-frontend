import { createSlice } from '@reduxjs/toolkit';
import { TrackModel } from '../models/Track';
import { tracks } from '../data/tracks';

interface TrackListState {
  tracks: TrackModel[];
}

const initialState: TrackListState = {
  tracks,
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  selectors: {
    selectTracks: (sliceState) => {
      return sliceState.tracks;
    },
  },
});

export const { selectTracks } = tracksSlice.selectors;

export default tracksSlice.reducer;
