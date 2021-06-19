import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

import { Logo } from './Logo';

export const Navbar = () => {

    const { userName } = useSelector(state => state.auth);

    const dispatch = useDispatch();

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
                    <input type="text" className="form-control w-25 me-5 shadow-none focus-none text-center" placeholder="Busca un título..."/>  
                    <div className="d-flex">    
                        <span className="navbar-brand">{userName}</span>                     
                        {/* <Link to="/" >
                            <button className="btn shadow-none btn-freeflix me-2" title="Inicio">
                                <i className="fas fa-home"></i>
                            </button>
                        </Link> */}
                        <button className="btn shadow-none btn-freeflix" title="Cerrar sesión" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}
