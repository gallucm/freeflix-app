import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { AlertError } from '../ui/AlertError';
import { Loading } from '../ui/Loading';

import { LogoNavbarAlone } from '../ui/LogoNavbarAlone';
import { NotAccountLink } from '../ui/NotAccountLink';

export const LoginScreen = () => {

    const { loading, error } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        user: '',
        password: '',
    });

    const { user, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(user, password));
    }

    return (
        <div className="main-container">
            <LogoNavbarAlone />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="login-content text-center">
                        <form onSubmit={handleLogin}>
                            <h3 className="login-label">Iniciar sesión</h3>
                            <div className="form-group login-input">
                                <input type="email" className="form-control shadow-none freeflix-input-generic" name="user" value={user} onChange={handleInputChange} placeholder="Email" required />
                                <input type="password" className="form-control shadow-none freeflix-input-generic" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" minLength="6" required />

                                {(error) && <AlertError />}

                                <button type="submit" className="btn shadow-none freeflix-btn-acces">
                                    {(!loading) && <span>Ingresar</span>}
                                    {(loading) && <Loading />}
                                </button>
                            </div>
                            <NotAccountLink />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
