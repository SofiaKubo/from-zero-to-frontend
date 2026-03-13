import {Layout} from '../components/Layout/Layout';
import {TrackList} from '../components/TrackList/TrackList';
import {useSelector} from 'react-redux';
import {selectIsLoading, selectTracks} from '../slices/tracksSlice';
import {RootState} from '../store/store';
import {TrackModel} from '../models/Track';

export const App = () => {
	const tracks = useSelector<RootState, TrackModel[]>(selectTracks);
	const isLoading = useSelector<RootState, boolean>((selectIsLoading));

	return (
		<Layout>
			<TrackList tracks={tracks} isLoading={isLoading}/>
		</Layout>
	)
}