import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCompleted } from "../../actions/ui";
import { startUpdatePassword } from "../../actions/User";
import { useForm } from "../../hooks/useForm";
import { AlertError } from "../ui/AlertError";
import { Alert } from "../ui/Alert";
import { Loading } from "../ui/Loading";

export const PasswordSection = () => {

    const dispatch = useDispatch();

    const { loading, completed, message } = useSelector(state => state.ui);
    const { id } = useSelector(state => state.auth.loggedUser);

    
    const [formValues, handleInputChange, reset] = useForm({
        password: "",
        password2: ""
    });

    useEffect(() => {
        if (completed){
            reset();
            dispatch(resetCompleted());
        }
    }, [completed, dispatch, reset]);

    const {password, password2} = formValues;

    const handlePasswordChange = (e) => {
        e.preventDefault();
        dispatch(startUpdatePassword(id, password, password2));
    }

    return (
        <form onSubmit={handlePasswordChange}>
            <input type="password" className="form-control shadow-none freeflix-input-generic mt-4" name="password" value={password}  onChange={handleInputChange} placeholder="Contraseña actual" maxLength="15" autoComplete="off" required />
            <input type="password" className="form-control shadow-none freeflix-input-generic" name="password2" value={password2} onChange={handleInputChange} placeholder="Contraseña nueva" maxLength="15" autoComplete="off" required />

            <AlertError />
            {(message) && <Alert/>}
            <button type="submit" className="btn btn-danger shadow-none btn-save" title="Cambiar contraseña" disabled={!password || !password2 || loading}>
                {(!loading) && <i className="fas fa-save" style={{ fontSize: '30px' }}></i>}
                {(loading) && <Loading />}
            </button>
        </form>
    )
}
