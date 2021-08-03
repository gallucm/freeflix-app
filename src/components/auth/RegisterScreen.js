import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { AlertError } from '../ui/AlertError';
import { Alert } from '../ui/Alert';
import { Loading } from '../ui/Loading';
import { LoginLink } from '../ui/LoginLink';
import { LogoNavbarAlone } from '../ui/LogoNavbarAlone';

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
        <div>
            <LogoNavbarAlone />

            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="register-content">
                            <h3 className="register-label">Registrarse</h3>
                            <form onSubmit={handleRegister}>
                                <div className="form-group register-input">
                                    <input type="text" className="form-control shadow-none register-input-user" name="userName" value={userName} onChange={handleInputChange} placeholder="Usuario" autoComplete="off" minLength="6" required />
                                    <input type="email" className="form-control shadow-none register-input-email" name="email" value={email} onChange={handleInputChange} placeholder="Email" autoComplete="off" required />
                                    <input type="password" className="form-control shadow-none register-input-password" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" minLength="6" required />
                                    <input type="password" className="form-control shadow-none register-input-password" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirme contraseña" minLength="6" required />
                                    <input type="text" className="form-control shadow-none register-input-user" name="code" value={code} onChange={handleInputChange} placeholder="Código de acceso" autoComplete="off" required />

                                    {(error) && <AlertError />}

                                    {message && <Alert />}

                                    <button className="btn shadow-none btn-wide-freeflix" type="submit">
                                        { (!loading) && <span>Registrarse</span>}
                                        { loading && <Loading /> }
                                    </button>
                                </div>
                            </form>
                            <LoginLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
