import React from 'react';

import { useForm } from '../../hooks/useForm';
import { Logo } from '../ui/Logo';
import { NotAccountLink } from '../ui/NotAccountLink';

export const LoginScreen = () => {

    const [formValues, handleInputChange] = useForm({
        user: '',
        password: '',
    });

    const { user, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(user);
        console.log(password);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">            
                    <span className="navbar-brand">
                        <Logo/>
                    </span>
                </div>
            </nav>

            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="content-login">
                                <h3 className="label-login">Iniciar sesión</h3>
                                <div className="form-group input-login">
                                    <input type="text" className="form-control shadow-none input-email text-center" name="user" value={user} onChange={handleInputChange} placeholder="Usuario o email" autoComplete="off" required/>
                                    <input type="password" className="form-control shadow-none input-password text-center" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" required/>
                                    <button className="btn shadow-none btn-login" onClick={handleLogin}>Ingresar</button>
                                </div>
                                <NotAccountLink/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
