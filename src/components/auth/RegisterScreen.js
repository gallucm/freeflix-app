import React from 'react';
import { useForm } from '../../hooks/useForm';
import { LoginLink } from '../ui/LoginLink';
import { Logo } from '../ui/Logo';

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        user: '',
        email: '',
        password: '',
        password2: ''
    });

    const { user, email, password, password2 } = formValues;
    
    const handleRegister = (e) => {
        e.preventDefault();
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
                                <h3 className="label-login">Registrarse</h3>
                                <div className="form-group input-login">
                                    <input type="text" className="form-control shadow-none input-email text-center" name="user" value={user} onChange={handleInputChange} placeholder="Usuario" autoComplete="off" />
                                    <input type="email" className="form-control shadow-none input-email text-center" name="email" value={email} onChange={handleInputChange} placeholder="Email" autoComplete="off" />
                                    <input type="password" className="form-control shadow-none input-password text-center" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" />
                                    <input type="password" className="form-control shadow-none input-password text-center" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirme contraseña" />
                                    <button className="btn shadow-none btn-login" onClick={handleRegister}>Registrarse</button>
                                </div>
                                <LoginLink/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
