import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

import { Logo } from '../ui/Logo';

export const NavbarAdmin = () => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(startLogout());
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Logo />
                    <form className="d-flex">
                        <Link to="/" >
                            <button className="btn shadow-none btn-freeflix me-2">
                                <i className="fas fa-home"></i>
                            </button>
                        </Link>
                        <button className="btn shadow-none btn-freeflix" title="Cerrar sesión" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </form>
                </div>
            </nav>
        </>
    )
}