import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../ui/Loading';
import { MovieGrid } from './MovieGrid';

import { startGetting } from '../../actions/Movie';

export const Movies = () => {

    const dispatch = useDispatch();

    const { loading, movies } = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(startGetting());
    }, [dispatch]);
    
    return (
        <>
            {(loading) && <Loading />}

            {(!loading) &&
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
