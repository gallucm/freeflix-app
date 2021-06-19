import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to="/" className="link">
            <div className="navbar-logo">
                <h3>FREEFLIX</h3>
            </div>
        </Link>
    )
}
