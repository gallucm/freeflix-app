import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startGetMoviesByGender, startGetMoviesByTitle, startUnsetSearchValue } from '../../actions/Movie';

import { Logo } from './Logo';

import { genders } from '../../helpers/genders';
import { useEffect, useState } from 'react';

import profileImage from '../../assets/images/not-profile.jpg';

export const Navbar = ({ searchAllowed = true, optionsAllowed = true, profileAllowed = true }) => {

    const { genderSelected } = useSelector(state => state.movies);
    const loggedUser = useSelector(state => state.auth.loggedUser);

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
            <nav className="navbar navbar-expand-lg navbar-dark mt-2" >
                <div className="container-fluid">
                    <div className="d-flex">
                        <span className="navbar-brand">
                            <Logo />
                        </span>

                        {optionsAllowed &&
                            <section id="navbar-options">
                                <span className="navbar-menu-option home" onClick={handleHome}>Inicio</span>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown"> 
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown mt-2">
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
                            </section>
                        }

                    </div>

                    <div className="d-flex">
                        {searchAllowed &&
                            <input type="search" className="me-3" id="input-search" name="searchValue" value={search} onChange={handleInputChange} autoComplete="off" />
                        }
                        {profileAllowed &&
                            <li className="nav-item dropdown dropstart mb-2 ms-auto" >
                                <span className="navbar-menu-option" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={loggedUser.imageProfile ? loggedUser.imageProfile.url : profileImage} alt="pepe" className="image-profile-mini" title={loggedUser.userName} />
                                </span>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" style={{ marginTop: '50px' }}>
                                    <Link to="/profile" className="no-decoration">
                                        <li className="m-2 pointer">Perfil</li>
                                    </Link>
                                    <li className="m-2 pointer" onClick={handleLogout}>Salir</li>
                                </ul>
                            </li>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
