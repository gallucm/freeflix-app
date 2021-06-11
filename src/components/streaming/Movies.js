import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

// import movie3 from '../../assets/img/movie-3.jpg';
// import movie2 from '../../assets/img/movie-2.jpg';
// import movie1 from '../../assets/img/movie-1.jpg';

export const Movies = () => {
    
    const history = useHistory();
    const handleClickMovie = useCallback(() => history.push('/m/1234'), [history]);

    const movie = 'https://s3-eu-west-1.amazonaws.com/abandomedia/indie/poster/db_posters_29937.jpg';

    return (
        <>
            <div className="flex-container mt-4">
                <div className="flex-item">
                    <img src={movie} alt="movie" className="img-movie" onClick={handleClickMovie} />
                </div>
                <div className="flex-item">
                    <img src={movie} alt="movie" className="img-movie" onClick={handleClickMovie}/>
                </div>
                <div className="flex-item">
                    <img src={movie} alt="movie" className="img-movie" onClick={handleClickMovie}/>
                </div>
                
            </div>
        </>
    )
}
