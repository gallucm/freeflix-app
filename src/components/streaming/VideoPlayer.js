import React from 'react';
import ReactPlayer from 'react-player';

import movie from '../../assets/video/movie.mkv';
import sub from '../../assets/video/movie.vtt';

export const VideoPlayer = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
            <ReactPlayer
                url={movie}
                controls
                height={'100%'}
                width={'100%'}
                subtitles={sub}
                config={{ file: {
                    tracks: [
                        {kind: 'subtitles', src: sub, srcLang: 'es', default: true}
                    ],
                    attributes: {
                        controlsList: 'nodownload'
                    }
                }}}
            />
        </div>
    )
}
