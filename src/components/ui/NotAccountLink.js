import React from 'react';
import { Link } from 'react-router-dom';

export const NotAccountLink = () => {
    return (
        <div className="freeflix-span-generic">
            <span>No tienes cuenta? crea una
                <Link to="/register">
                    <span> aquí</span>
                </Link>
            </span>
        </div>
    )
}
