import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { startGetMoviesByGender, startGetMoviesByTitle, startUnsetGenderFilter, startUnsetSearchValue } from '../../actions/Movie';

import { genders } from '../../helpers/genders';

import { Navbar } from '../ui/Navbar';
import { Movies } from './Movies';

export const HomeScreen = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { genderSelected, searchValue } = useSelector(state => state.movies);

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (genderSelected)
            setSearch('');

    }, [genderSelected]);

    const handleInputChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);

        if (e.target.value)
            dispatch(startGetMoviesByTitle(e.target.value));
        else
            dispatch(startUnsetSearchValue());
    }

    const handleGetMoviesByGender = (e) => {
        e.preventDefault();

        dispatch(startUnsetSearchValue());

        const gender = e.target.innerHTML;
        dispatch(startGetMoviesByGender(gender));

        history.push('/');
    }

    const handleMyList = () => {
        history.push('/my-list');
    }


    const handleUnsetGender = (e) => {
        e.preventDefault();

        dispatch(startUnsetGenderFilter());
    }

    return (
        <>
            <Navbar />

            <div className="main-container">

                <div id="navbar-options-mini">
                    <span className="navbar-menu-option" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <strong>Peliculas</strong>
                    </span>
                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                        {genders.map(gend => (
                            <li className="m-2 pointer" key={gend} onClick={handleGetMoviesByGender}>{gend}</li>
                        ))}
                    </ul>
                    <span className="navbar-menu-option" onClick={handleMyList}>Mi lista</span>
                </div>

                <input type="search" className="" id="input-search-responsive" name="searchValue" value={search} onChange={handleInputChange} autoComplete="off" />


                <div className="container home-container">
                    {genderSelected &&
                        <div className="text-center">
                            <span>
                                Peliculas de: <strong>{genderSelected}</strong>
                                <button type="button" className="btn shadow-none red-freeflix" onClick={handleUnsetGender}>
                                    <i className="fas fa-times"></i>
                                </button>
                            </span>
                        </div>
                    }

                    {(searchValue) &&
                        <div className="text-center">
                            <span>
                                Título buscado: <strong>{searchValue}</strong>
                            </span>
                        </div>
                    }
                    <Movies />
                </div>
            </div>
        </>
    )
}
