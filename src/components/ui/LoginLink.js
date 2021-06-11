import React from 'react';
import { Link } from 'react-router-dom';

export const LoginLink = () => {
    return (
        <div className="link-register-account">
            <span>Tienes cuenta? 
                <Link to="/login">
                    <span> inicia sesión</span>
                </Link>
            </span>
        </div>
    )
}
