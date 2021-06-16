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

    // const history = useHistory();
    // const handleClickMovie = useCallback(() => history.push('/m/1234'), [history]);

    // const movie = 'https://s3-eu-west-1.amazonaws.com/abandomedia/indie/poster/db_posters_29937.jpg';

    return (
        <>
            {(loading) && <Loading />}

            {(!loading) &&
                <div className="flex-container mt-4">
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
