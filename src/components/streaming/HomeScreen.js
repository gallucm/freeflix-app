import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUnsetGenderFilter } from '../../actions/Movie';

import { Navbar } from '../ui/Navbar';
import { CategoryFilters } from './CategoryFilters';
import { Movies } from './Movies';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const { genderSelected } = useSelector(state => state.movies);

    const handleUnsetGender = (e) => {
        e.preventDefault();

        dispatch(startUnsetGenderFilter());
    }

    return (
        <>
            <Navbar />
            <div className="container home-container">
                {genderSelected &&
                    <div className="text-lg-start ms-4">
                        <span>
                            Peliculas de: <strong>{genderSelected}</strong>
                            <button type="button" className="btn shadow-none red-freeflix" onClick={handleUnsetGender}>
                                <i className="fas fa-times"></i>
                            </button>
                        </span>
                    </div>
                }
                <Movies />
            </div>
        </>
    )
}
