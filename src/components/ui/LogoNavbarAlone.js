import React from 'react';
import { Logo } from './Logo';

export const LogoNavbarAlone = () => {
    return (

        //TODO: AGREGAR NAVBAR UNICO CON PROPS OPCIONALES
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <Logo />
                    </span>
                </div>
            </nav>
        </>
    )
}
