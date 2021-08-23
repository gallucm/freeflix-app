import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startGetMoviesByGender, startGetMoviesByTitle, startUnsetSearchValue } from '../../actions/Movie';

import { Logo } from './Logo';

import { genders } from '../../helpers/genders';
import { useEffect, useState } from 'react';
import { getLoggedUser } from '../../helpers/User';

export const Navbar = ({allowed = true}) => {

    const { genderSelected } = useSelector(state => state.movies);
    const loggedUser = getLoggedUser();

    const dispatch = useDispatch();
    const history = useHistory();

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (genderSelected)
            setSearch('');

    }, [genderSelected]);

    const handleInputChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value);

        if (e.target.value) {
            dispatch(startGetMoviesByTitle(e.target.value));
            
        } else {
            dispatch(startUnsetSearchValue());
        }
    }

    const handleGetMoviesByGender = (e) => {
        e.preventDefault();

        dispatch(startUnsetSearchValue());

        const gender = e.target.innerHTML;
        dispatch(startGetMoviesByGender(gender));

        history.push('/');
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(startLogout());
    }

    const handleHome = () => {
        history.push('/');
    }

    const handleMyList = () => {
        history.push('/my-list');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">


                    <div className="d-flex">
                        <span className="navbar-brand">
                            <Logo />
                        </span>

                        <span className="navbar-menu-option" onClick={handleHome}>Inicio</span>


                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <span className="navbar-menu-option" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>Peliculas</strong>
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                        {genders.map(gend => (
                                            <li className="m-2 pointer" key={gend} onClick={handleGetMoviesByGender}>{gend}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <span className="navbar-menu-option" onClick={handleMyList}>Mi lista</span>
                    </div>

                    <div className="d-flex">
                        { allowed &&
                          <input type="search" className="me-3" name="searchValue" value={search} onChange={handleInputChange} autoComplete="off" />
                        }
                        <span className="navbar-brand">{loggedUser.userName}</span>
                        <button className="btn shadow-none btn-freeflix" title="Cerrar sesión" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
