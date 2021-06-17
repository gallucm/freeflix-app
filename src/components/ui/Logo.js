import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        // <div className="navbar-logo">
        //     <h3>FREEFLIX</h3>
        // </div>
        <Link to="/" className="link">
            <div className="navbar-logo">
                <h3>FREEFLIX</h3>
            </div>
        </Link>
    )
}
