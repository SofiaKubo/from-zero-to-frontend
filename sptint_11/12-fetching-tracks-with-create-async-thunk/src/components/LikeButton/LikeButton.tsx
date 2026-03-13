import './styles.css';
import {TrackModel} from '../../models/Track';
import {useDispatch} from 'react-redux';
import {toggleLike} from '../../slices/tracksSlice';
import {AppDispatch} from '../../store/store';

interface LikeButtonProps {
    track: TrackModel
}

export const LikeButton = ({track}: LikeButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const onClick = () => {
        dispatch(toggleLike(track));
    }

    return (
        <button className='like-button' onClick={onClick}>
            {
                track.isLiked ?
                    'дизлайк' :
                    'лайк'
            }
        </button>
    )
}