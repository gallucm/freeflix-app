import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../ui/Logo';

export const NavbarAdmin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Logo style={{margin: '0px !important'}} />
                    <form className="d-flex">
                        <Link to="/" >
                            <button className="btn shadow-none admin-button">
                                <i className="fas fa-home"></i>
                            </button>
                        </Link>
                        <Link to="/login" >
                            <button className="btn shadow-none admin-button">
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
        </>
    )
}