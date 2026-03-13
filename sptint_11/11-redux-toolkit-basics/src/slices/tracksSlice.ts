import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
  reducers: {
    toggleLike: (state, action: PayloadAction<TrackModel>) => {
      const track = state.tracks.find((t) => t.id === action.payload.id);
      if (track) {
        track.isLiked = !track.isLiked;
      }
    },
  },
  selectors: {
    selectTracks: (sliceState) => {
      return sliceState.tracks;
    },
  },
});

export const { toggleLike } = tracksSlice.actions;
export const { selectTracks } = tracksSlice.selectors;
export default tracksSlice.reducer;
