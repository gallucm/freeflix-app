import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import movie3 from '../../assets/img/movie-3.jpg';
import movie2 from '../../assets/img/movie-2.jpg';
import movie1 from '../../assets/img/movie-1.jpg';

export const Movies = () => {
    
    const history = useHistory();
    const handleClickMovie = useCallback(() => history.push('/m/1234'), [history]);

    return (
        <>
            <div className="flex-container mt-4">
                <div className="flex-item">
                    <img src={movie3} alt="movie" className="img-movie" onClick={handleClickMovie} />
                </div>
                <div className="flex-item">
                    <img src={movie2} alt="movie" className="img-movie" onClick={handleClickMovie}/>
                </div>
                <div className="flex-item">
                    <img src={movie1} alt="movie" className="img-movie" onClick={handleClickMovie}/>
                </div>
            </div>
        </>
    )
}
