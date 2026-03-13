import { Layout } from '../components/Layout/Layout';
import { TrackList } from '../components/TrackList/TrackList';
import { useSelector } from 'react-redux';
import { getTracks } from '../slices/tracksSlice';

export const App = () => {
  const tracks = useSelector(getTracks);

  return (
    <Layout>
      <TrackList tracks={tracks} />
    </Layout>
  );
};
