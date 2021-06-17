import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../ui/Logo';

export const NavbarAdmin = () => {
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
                        <Link to="/login" >
                            <button className="btn shadow-none btn-freeflix">
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
        </>
    )
}