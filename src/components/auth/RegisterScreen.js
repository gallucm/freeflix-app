import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { AlertError } from '../ui/AlertError';
import { Alert } from '../ui/Alert';
import { Loading } from '../ui/Loading';
import { LoginLink } from '../ui/LoginLink';
import { Navbar } from '../ui/Navbar';

export const RegisterScreen = () => {

    const { loading, error, message } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        userName: '',
        email: '',
        password: '',
        password2: '',
        code: '',
        favoritesList: []
    });

    const { userName, email, password, password2, code } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser(formValues));
    }

    return (
        <>
            <Navbar searchAllowed={false} optionsAllowed={false} profileAllowed={false} />
            <div className="main-container">

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="register-content">
                            <h3 className="register-label">Registrarse</h3>
                            <form onSubmit={handleRegister}>
                                <div className="form-group register-input">
                                    <input type="text" className="form-control shadow-none freeflix-input-generic" name="userName" value={userName} onChange={handleInputChange} placeholder="Usuario" autoComplete="off" minLength="6" required />
                                    <input type="email" className="form-control shadow-none freeflix-input-generic" name="email" value={email} onChange={handleInputChange} placeholder="Email" autoComplete="off" required />
                                    <input type="password" className="form-control shadow-none freeflix-input-generic" name="password" value={password} onChange={handleInputChange} placeholder="Contrase??a" minLength="6" required />
                                    <input type="password" className="form-control shadow-none freeflix-input-generic" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirme contrase??a" minLength="6" required />
                                    <input type="text" className="form-control shadow-none freeflix-input-generic" name="code" value={code} onChange={handleInputChange} placeholder="C??digo de acceso" autoComplete="off" required />

                                    {(error) && <AlertError />}

                                    {message && <Alert />}

                                    <button className="btn shadow-none freeflix-btn-acces" type="submit">
                                        {(!loading) && <span>Registrarse</span>}
                                        {loading && <Loading />}
                                    </button>
                                </div>
                            </form>
                            <LoginLink />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
