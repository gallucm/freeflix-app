import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser, removeUserCreated } from '../../actions/auth';
import { removeError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { LoginLink } from '../ui/LoginLink';
import { Logo } from '../ui/Logo';

export const RegisterScreen = () => {

    const { loading, error } = useSelector(state => state.ui);
    const { userCreated } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        userName: '',
        email: '',
        password: '',
        password2: ''
    });

    const { userName, email, password, password2 } = formValues;
        
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(formValues));
    }

    const handleResetError = (e) => {
        e.preventDefault();
        dispatch(removeError());
    }

    const handleResetUser = (e) => {
        e.preventDefault();
        dispatch(removeUserCreated());
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
            
            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="content-login animate__animated animate__pulse">
                                <h3 className="label-login">Registrarse</h3>
                                <form onSubmit={handleRegister}>
                                    <div className="form-group input-login">
                                        <input type="text" className="form-control shadow-none input-email text-center" name="userName" value={userName} onChange={handleInputChange} placeholder="Usuario" autoComplete="off" minLength="6" required/>                                     
                                        <input type="email" className="form-control shadow-none input-email text-center" name="email" value={email} onChange={handleInputChange} placeholder="Email" autoComplete="off" required/>
                                        <input type="password" className="form-control shadow-none input-password text-center" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" minLength="6" required  />
                                        <input type="password" className="form-control shadow-none input-password text-center" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirme contraseña" minLength="6" required />

                                        {
                                            (error) &&
                                            <div className="alert alert-dismissible alert-danger fade show alert-freeflix" role="alert">
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

                                        {
                                            (!loading && userCreated) &&
                                            <div className="alert alert-dismissible alert-success fade show alert-freeflix" role="alert">
                                                Cuenta creada correctamente. Ya puede iniciar sesión.
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetUser}></button>
                                            </div>
                                        }

                                        <button className="btn shadow-none btn-login" type="submit">Registrarse</button>
                                    </div>
                                </form>
                                <LoginLink />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
