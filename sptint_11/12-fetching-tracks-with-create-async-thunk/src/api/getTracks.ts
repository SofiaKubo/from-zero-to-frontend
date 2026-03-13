import {TrackModel} from '../models/Track';
import {tracks} from '../data/tracks';

export const getTracks = () => {
    return new Promise((resolve: (tracks: TrackModel[]) => void) => {
        setTimeout(() => {
            resolve(tracks);
        }, 3000)
    })
}