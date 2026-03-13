import './styles.css';
import {Track} from '../Track/Track';
import {TrackModel} from '../../models/Track';

interface TrackListProps {
    tracks: TrackModel[]
    isLoading: boolean
}

export const TrackList = ({tracks, isLoading}: TrackListProps) => {
    return (
        <>
            {
                isLoading ?
                    <div>Loading...</div> :
                    <div className='trackList'>
                        {tracks.map((track) => (
                            <Track
                                key={track.id}
                                track={track}
                            />
                        ))}
                    </div>
            }
        </>
    )
}