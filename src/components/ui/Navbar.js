import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from './Logo';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">            
                    <span className="navbar-brand">
                        <Logo/>
                    </span>
                    <input type="text" className="form-control w-25 me-5 shadow-none focus-none text-center" placeholder="Busca un título..."/>  
                    <form className="d-flex">    
                        <span className="navbar-brand">User</span>                     
                        <Link to="/" >
                            <button className="btn shadow-none btn-freeflix me-2" title="Inicio">
                                <i className="fas fa-home"></i>
                            </button>
                        </Link>
                        <Link to="/login" >
                            <button className="btn shadow-none btn-freeflix" title="Cerrar sesión">
                                <i className="fas fa-sign-out-alt"></i>
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
        </>
    )
}
