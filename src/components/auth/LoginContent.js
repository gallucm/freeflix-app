import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { AlertError } from '../ui/AlertError';
import { Loading } from '../ui/Loading';
import { NotAccountLink } from '../ui/NotAccountLink';

export const LoginContent = () => {

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
        <div className="text-center mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="login-content">
                        <form onSubmit={handleLogin}>
                            <h3 className="login-label">Iniciar sesión</h3>
                            <div className="form-group login-input">
                                <input type="email" className="form-control shadow-none login-input-email text-center" name="user" value={user} onChange={handleInputChange} placeholder="Email" required />
                                <input type="password" className="form-control shadow-none login-input-password text-center" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" minLength="6" required />

                                {(error) && <AlertError />}

                                <button type="submit" className="btn shadow-none btn-wide-freeflix">
                                    {(!loading) && <span>Ingresar</span>}
                                    {(loading) && <Loading/>
                                        // <div className="spinner-border" role="status">
                                        //     <span className="visually-hidden">Loading...</span>
                                        // </div>
                                    }
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
