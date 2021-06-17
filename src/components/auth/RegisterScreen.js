import React from 'react';
import { useDispatch } from 'react-redux';
import { errorDiferentPasswords, registerUser } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { LoginLink } from '../ui/LoginLink';
import { Logo } from '../ui/Logo';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        user: '',
        email: '',
        password: '',
        password2: ''
    });

    const { user, email, password, password2 } = formValues;
    
    const checkPassword = (p1, p2) => {
        if (p1 === p2)
            return true;
        else{
            errorDiferentPasswords();
            return false;
        }
    }
    
    const handleRegister = (e) => {
        e.preventDefault();
        
        const areSame = checkPassword(formValues.password, formValues.password2);
        
        if (areSame){
            const { password2, ...user } = formValues;
            dispatch(registerUser(user));
        }
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
                            <div className="content-login">
                                <h3 className="label-login">Registrarse</h3>
                                <form onSubmit={handleRegister}>
                                    <div className="form-group input-login">
                                        <input type="text" className="form-control shadow-none input-email text-center" name="user" value={user} onChange={handleInputChange} placeholder="Usuario" autoComplete="off" minLength="6" required/>                                     
                                        <input type="email" className="form-control shadow-none input-email text-center" name="email" value={email} onChange={handleInputChange} placeholder="Email" autoComplete="off" required/>
                                        <input type="password" className="form-control shadow-none input-password text-center" name="password" value={password} onChange={handleInputChange} placeholder="Contraseña" minLength="6" required  />
                                        <input type="password" className="form-control shadow-none input-password text-center" name="password2" value={password2} onChange={handleInputChange} placeholder="Confirme contraseña" minLength="6" required />
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
