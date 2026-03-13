import './styles.css';
import {TrackModel} from '../../models/Track';

interface LikeButtonProps {
    track: TrackModel
}

export const LikeButton = ({track}: LikeButtonProps) => {
    return (
        <button className='like-button'>
            {
                track.isLiked ?
                    'дизлайк' :
                    'лайк'
            }
        </button>
    )
}