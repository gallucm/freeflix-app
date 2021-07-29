import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startGetMoviesByTitle, startUnsetSearchValue } from '../../actions/Movie';

import { Logo } from './Logo';

export const Navbar = ({showSearch = true}) => {

    const { userName } = useSelector(state => state.auth);
    
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');

    //TODO: Pensar de usar useMemo para cuando las peliculas no cambian.

    const handleInputChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);

        if (e.target.value)
            dispatch(startGetMoviesByTitle(e.target.value));
        else 
            dispatch(startUnsetSearchValue());
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(startLogout());
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">            
                    <span className="navbar-brand">
                        <Logo/>
                    </span>
                    {showSearch &&
                        <input type="text" className="form-control w-25 me-5 shadow-none focus-none text-center" name="searchValue" value={search} onChange={handleInputChange} placeholder="Busca un título..."/>  
                    }
                   
                    <div className="d-flex">    
                        <span className="navbar-brand">{userName}</span>                     
                        <button className="btn shadow-none btn-freeflix" title="Cerrar sesión" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
