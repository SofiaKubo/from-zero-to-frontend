import { Layout } from '../components/Layout/Layout';
import { TrackList } from '../components/TrackList/TrackList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { TrackModel } from '../models/Track';
import { selectTracks } from '../slices/tracksSlice';

export const App = () => {
  const tracks = useSelector<RootState, TrackModel[]>(selectTracks);

  return (
    <Layout>
      <TrackList tracks={tracks} />
    </Layout>
  );
};
