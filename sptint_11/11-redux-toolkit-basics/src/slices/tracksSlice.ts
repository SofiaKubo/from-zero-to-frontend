import { createSlice } from '@reduxjs/toolkit';
import { tracks } from '../data/tracks';
import { TrackModel } from '../models/Track';

interface TrackListState {
  tracks: TrackModel[];
}

const initialState: TrackListState = {
  tracks,
};

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  selectors: {
    getTracks: (state) => state.tracks,
  },
});

export const { getTracks } = trackSlice.selectors;
export const tracksReducer = trackSlice.reducer;
