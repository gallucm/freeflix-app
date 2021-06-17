import React from 'react';
import { LoginLink } from '../ui/LoginLink';
import { Logo } from '../ui/Logo';

export const RegisterScreen = () => {
    
    const handleRegister = (e) => {
        e.preventDefault();
        console.log('registrarse');
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
                                    <input type="text" className="form-control shadow-none input-email" name="user" placeholder="Usuario" autoComplete="off" />
                                    <input type="email" className="form-control shadow-none input-email" name="email" placeholder="Email" autoComplete="off" />
                                    <input type="password" className="form-control shadow-none input-password" name="password" placeholder="Contraseña" />
                                    <input type="password" className="form-control shadow-none input-password" name="password2" placeholder="Confirme contraseña" />
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
