import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
    return (
        <div className="mt-4">
            <Link to="/" className="btn btn-outline-danger">
                <i className="fas fa-home"></i>
                <span>  Home</span>
            </Link>
        </div>
    )
}
