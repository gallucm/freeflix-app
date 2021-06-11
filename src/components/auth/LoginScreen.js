import React from 'react';
import { Logo } from '../ui/Logo';
import { NotAccountLink } from '../ui/NotAccountLink';

export const LoginScreen = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('login');
    }

    return (
        <div>
            <Logo/>
            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="content-login">
                                <h3 className="label-login">Iniciar sesión</h3>
                                <div className="form-group input-login">
                                    <input type="email" className="form-control shadow-none input-email" name="email" placeholder="Email o usuario" autoComplete="off" />
                                    <input type="password" className="form-control shadow-none input-password" name="password" placeholder="Password" />
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
