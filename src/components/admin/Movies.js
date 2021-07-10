import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteMovie, startGetting } from '../../actions/Movie';
import { Loading } from '../ui/Loading';

export const Movies = () => {

    const dispatch = useDispatch();

    const { loading, movies } = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(startGetting());
    }, [dispatch]);

    const handleDeleteMovie = (id) => {
        dispatch(startDeleteMovie(id));
    } 

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            {(loading) && <Loading />}

                            {(!loading && movies) &&
                                <div className="mt-4">
                                    {
                                        movies.map(movie => (                                            
                                            <div style={{textAlign: 'center'}} key={movie.id}>
                                                <span style={{fontSize: '25px'}}>{movie.title}</span>
                                                <button type="button" className="btn shadow-none" onClick={() => {handleDeleteMovie(movie.id)}}>
                                                    <i className="fas fa-times" style={{color: '#E50914'}}></i>
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
