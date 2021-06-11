import React from 'react';

export const LoginScreen = () => {
    return (
        <>
            <div className="navbar-logo">
                <h3>FREEFLIX</h3>
            </div>
            <div className="col-lg-12">
                <div className="jumbotron jumbotron-fluid text-center mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="content-login">
                                <h3 className="label-login">Iniciar sesión</h3>
                                <div className="form-group input-login">
                                    <input type="email" className="form-control shadow-none input-email" name="email" placeholder="Ingrese un email" autoComplete="off" />
                                    <input type="password" className="form-control shadow-none input-password" name="password" placeholder="Ingrese el password" />
                                    <button className="btn shadow-none btn-login">Ingresar</button>
                                </div>
                                <div className="link-register-account">
                                    <span>No tienes cuenta? Crea una <a href="/register">acá</a></span>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
