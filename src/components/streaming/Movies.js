import React from 'react';
import { useSelector } from 'react-redux';

import { MovieGrid } from './MovieGrid';
import { LoadingRed } from '../ui/LoadingRed';
import { useMovies } from '../../hooks/useMovies';

export const Movies = () => {

    useMovies();

    const { movies } = useSelector(state => state.movies);
    const { loading } = useSelector(state => state.ui);

    return (
        <>
            {(loading) &&
                <LoadingRed />}

            {(!loading && movies) &&
                <div className="movies-container mt-4">
                    {
                        movies.map(movie => (
                            <MovieGrid key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            }

            

            {(!loading && movies.length === 0) &&
                <div className="mt-4 text-center">
                    <h4> En este momento no hay títulos disponibles. </h4>
                </div>
            }
        </>
    )
}
