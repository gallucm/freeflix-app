import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMoviesByGender, startUnsetGenderFilter } from '../../actions/Movie';

import { genders } from '../../helpers/genders';

export const CategoryFilters = () => {

    const { genderSelected } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const handleGetMoviesByGender = (e) => {
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
                { genders.map( gender => (
                  <span className="badge bg-freeflix m-2" onClick={handleGetMoviesByGender}>{gender}</span>  
                ))}

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
