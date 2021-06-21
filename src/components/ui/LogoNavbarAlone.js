import React from 'react';
import { Logo } from './Logo';

export const LogoNavbarAlone = () => {
    return (
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
