import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

export const VideoPlayer = () => {

    const { movieSelected } = useSelector(state => state.movies);

    return (
        <div className="d-flex justify-content-center mt-2">
            <ReactPlayer
                url={movieSelected.video}
                controls
                height={'80%'}
                width={'80%'}
                // subtitles={}
                // config={{ file: {
                //     tracks: [
                //         {kind: 'subtitles', src: sub, srcLang: 'es', default: true}
                //     ],
                //     attributes: {
                //         controlsList: 'nodownload'
                //     }
                // }}}
            />
        </div>
    )
}
