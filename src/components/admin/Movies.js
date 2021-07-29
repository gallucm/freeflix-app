import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteMovie, startGetMovies } from '../../actions/Movie';
import { Alert } from '../ui/Alert';
import { LoadingRed } from '../ui/LoadingRed';

export const Movies = () => {

    const dispatch = useDispatch();

    const { movies } = useSelector(state => state.movies);
    const { loading } = useSelector(state => state.ui);

    useEffect(() => {
        dispatch(startGetMovies());
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
                            {loading && <LoadingRed />}

                            {(!loading && movies) &&
                                <div className="mt-4">
                                    {
                                        movies.map(movie => (
                                            <div style={{ textAlign: 'center' }} key={movie.id}>
                                                <span style={{ fontSize: '25px' }}>{movie.title}</span>
                                                <button type="button" className="btn  btn-freeflix shadow-none ms-4" onClick={() => { handleDeleteMovie(movie.id) }} title="Eliminar">
                                                    <i className="far fa-trash-alt" style={{ fontSize: '15px' }}></i>
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }

                            {(movies.length === 0 && !loading) &&
                                <div className="mt-4">
                                    <h4>Actualmente no hay ninguna pelicula cargada</h4>
                                </div>
                            }

                            <Alert />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
