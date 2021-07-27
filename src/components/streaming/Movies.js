import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieGrid } from './MovieGrid';

import { startGetting } from '../../actions/Movie';
import { LoadingRed } from '../ui/LoadingRed';

export const Movies = () => {

    const dispatch = useDispatch();

    const { movies } = useSelector(state => state.movies);
    const { loading } = useSelector(state => state.ui);

    useEffect(() => {
        dispatch(startGetting());
    }, [dispatch]);

    return (
        <>
            {(loading) && 
                <LoadingRed />}

            {(!loading && movies) &&
                <div className="movies-container mt-4">
                    {
                        movies.map(movie => (
                            <MovieGrid key={movie.id} movie={movie}/>
                        ))
                    }
                </div>
            }
        </>
    )
}
