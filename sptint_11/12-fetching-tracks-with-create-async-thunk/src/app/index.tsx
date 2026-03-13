import { useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
import { TrackList } from '../components/TrackList/TrackList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracks, selectIsLoading, selectTracks } from '../slices/tracksSlice';
import { AppDispatch, RootState } from '../store/store';
import { TrackModel } from '../models/Track';

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tracks = useSelector<RootState, TrackModel[]>(selectTracks);
  const isLoading = useSelector<RootState, boolean>(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  return (
    <Layout>
      <TrackList tracks={tracks} isLoading={isLoading} />
    </Layout>
  );
};
