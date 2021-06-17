import React from 'react';
import { Link } from 'react-router-dom';

export const HomeButton = () => {
    return (
        <div className="mt-4">
            <Link to="/" className="btn btn-freeflix">
                <i className="fas fa-undo-alt mb-2"></i>
                <span>  Volver</span>
            </Link>
        </div>
    )
}
