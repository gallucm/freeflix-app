import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startAddMovieToFavorites, startSetMovieSelected } from '../../actions/Movie';

export const MovieGrid = ({movie}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelected = () => {
        dispatch(startSetMovieSelected(movie));
        history.push('/m/' + movie.id);
    }

    const handleAddToFavorites = (movie) => {
        const userId = localStorage.getItem('user-id');

        if (userId) {
            dispatch(startAddMovieToFavorites(userId, movie));
        }
    }
    
    return (
        <div className="movie-grid text-center animate__animated animate__zoomIn">
            <h2>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} key={movie.id} className="img-movie" onClick={handleSelected}/>
            <button className="btn btn-danger" onClick={() => handleAddToFavorites(movie)}>+</button>
        
        </div>
    )
}
