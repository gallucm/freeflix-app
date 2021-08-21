import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startAddMovieToFavorites, startRemoveMovieFromFavorites, startSetMovieSelected } from '../../actions/Movie';

export const MovieGrid = ({ movie }) => {

    const { favoritesList } = useSelector(state => state.movies);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        favoritesList.forEach(fav => {
            if (fav.id === movie.id) {
                setIsFavorite(true);
            }
        });

    }, [movie, favoritesList]);

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
            setIsFavorite(true);
        }
    }

    const handleDeleteFavorite = (movie) => {
        const userId = localStorage.getItem('user-id');

        if (userId) {
            dispatch(startRemoveMovieFromFavorites(userId, movie));
            setIsFavorite(false);
        }        
    }



    return (
        <div className="movie-grid text-center animate__animated animate__zoomIn">
            <h2>{movie.title}</h2>
            <div className="img-container">
                <img src={movie.image} alt={movie.title} key={movie.id} className="img-movie" onClick={handleSelected} />
                <div className="overlay"></div>
                <button type="button" className="btn btn-danger button" onClick={() => { 
                    isFavorite ? handleDeleteFavorite(movie) : handleAddToFavorites(movie);
                }}
                    title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}>
                    {isFavorite ? <i className="fa fa-check"></i> : <i className="fas fa-star"></i>}
                </button>
            </div>
        </div>
    )
}
