import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteMovie, startGetting } from '../../actions/Movie';
import { Alert } from '../ui/Alert';
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

                            {
                                (!loading && movies) &&
                                <div className="mt-4">
                                    {
                                        movies.map(movie => (                                            
                                            <div style={{textAlign: 'center'}} key={movie.id}>
                                                <span style={{fontSize: '25px'}}>{movie.title}</span>
                                                <button type="button" className="btn  btn-freeflix shadow-none ms-4" onClick={() => {handleDeleteMovie(movie.id)}} title="Eliminar">
                                                    <i className="far fa-trash-alt"  style={{fontSize: '15px'}}></i>
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            }

                            {
                                (movies.length === 0 && !loading) && 
                                <div className="mt-4"> 
                                    <h4>Actualmente no hay ninguna pelicula cargada</h4>
                                </div>
                            }

                            <Alert/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
