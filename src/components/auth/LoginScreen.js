import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/auth';
import { removeError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
import { Logo } from '../ui/Logo';
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

    const handleResetError = (e) => {
        e.preventDefault();
        dispatch(removeError());
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">
                        <Logo />
                    </span>
                </div>
            </nav>

            <div className="col-lg-12 ">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="content-login animate__animated animate__pulse">

                                <form onSubmit={handleLogin} id="login-form">
                                    <h3 className="label-login">Iniciar sesión</h3>
                                    <div className="form-group input-login">
                                        <input type="email" className="form-control shadow-none input-email text-center" name="user" value={user} onChange={handleInputChange} placeholder="Email" autoComplete="off" required />
                                        <input type="password" className="form-control shadow-none input-password text-center" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" minLength="6" required />

                                        {
                                            (error) &&
                                            <div className="alert alert-dismissible alert-danger fade show alert-freeflix animate__animated animate__jello" role="alert">
                                                {error}
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetError}></button>
                                            </div>
                                        }

                                        {
                                            (loading) &&
                                            <div className="d-flex justify-content-center mt-3">
                                                <div className="spinner-border text-danger" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                        }

                                        <button type="submit" className="btn shadow-none btn-login">Ingresar</button>
                                    </div>
                                    <NotAccountLink />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
