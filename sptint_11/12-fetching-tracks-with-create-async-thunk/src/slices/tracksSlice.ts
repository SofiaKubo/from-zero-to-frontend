import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TrackModel } from '../models/Track';
import { getTracks } from '../api/getTracks';

interface TrackListState {
  tracks: TrackModel[];
  isLoading: boolean;
}

const initialState: TrackListState = {
  tracks: [],
  isLoading: true,
};

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async () => {
  return await getTracks();
});

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<TrackModel>) {
      const { id } = action.payload;

      const trackToLike = state.tracks.find((track) => track.id === id);
      if (trackToLike) {
        trackToLike.isLiked = !trackToLike.isLiked;
      }
    },
  },
  selectors: {
    selectTracks: (sliceState) => {
      return sliceState.tracks;
    },
    selectIsLoading: (sliceState) => {
      return sliceState.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.tracks = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTracks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { selectTracks, selectIsLoading } = tracksSlice.selectors;

export const { toggleLike } = tracksSlice.actions;
export default tracksSlice.reducer;
