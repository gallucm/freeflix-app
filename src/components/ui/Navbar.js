import React from 'react';

import { Logo } from './Logo';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">            
                    <span className="navbar-brand">
                        <Logo/>
                    </span>
                    <input type="text" className="form-control w-25 me-5 shadow-none focus-none" placeholder="Busca un título..."/>  
                    <form className="d-flex">    
                        <span className="navbar-brand">User</span>                     
                        <button className="btn btn-logout-navbar shadow-none" type="submit">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>   Salir</span>
                        </button>
                    </form>
                </div>
            </nav>
        </>
    )
}
