import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetMoviesByGender, startUnsetGenderFilter } from '../../actions/Movie';

import { genders } from '../../helpers/genders';

export const CategoryFilters = () => {

    const { genderSelected, searchValue } = useSelector(state => state.movies);

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

                {!searchValue && genders.map(gender => (
                    <span key={gender} className="badge bg-freeflix m-2" onClick={handleGetMoviesByGender}>{gender}</span>
                ))}

                {(searchValue) &&
                    <div>
                        <span>
                            Título buscado: <strong>{searchValue}</strong>
                        </span>
                    </div>
                }

                {genderSelected &&
                    <div>
                        <span>
                            Filtro aplicado: <strong>{genderSelected}</strong>
                            <button type="button" className="btn shadow-none red-freeflix" onClick={handleUnsetGender}>
                                <i className="fas fa-times"></i>
                            </button>
                        </span>
                    </div>
                }
            </div>

        </>
    )
}
