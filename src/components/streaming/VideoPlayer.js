import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

export const VideoPlayer = () => {

    const { movieSelected } = useSelector(state => state.movies);

    return (
        <div className="react-player">
            <ReactPlayer
                url={movieSelected.video.url}
                controls
                height={'100%'}
                width={'100%'}
                config={{
                    attributes: {
                        controlsList: 'nodownload'
                    }
                }}
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
