import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMoviesByGender, startUnsetGenderFilter } from '../../actions/Movie';

export const CategoryFilters = () => {

    const { genderSelected } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const handleGetMovies = (e) => {
        e.preventDefault();

        const gender = e.target.innerHTML;
        dispatch(startGetMoviesByGender(gender));
    }

    const handleUnsetGender = (e) => {
        e.preventDefault();

        dispatch(startUnsetGenderFilter());
    }


    return (
        <>
            <div className="text-center box-categories">
                <span className="badge bg-freeflix m-2" onClick={handleGetMovies}>Acción</span>
                <span className="badge bg-freeflix m-2" onClick={handleGetMovies}>Comedia</span>
                <span className="badge bg-freeflix m-2" onClick={handleGetMovies}>Drama</span>
                <span className="badge bg-freeflix m-2" onClick={handleGetMovies}>SCI-FI</span>
                <span className="badge bg-freeflix m-2" onClick={handleGetMovies}>Terror</span>

                {genderSelected &&
                    <div class="alert alert-danger alert-dismissible fade show mt-2 alert-freeflix" role="alert">
                        Filtro aplicado: <strong>{genderSelected}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleUnsetGender}></button>
                    </div>
                }
            </div>

        </>
    )
}
