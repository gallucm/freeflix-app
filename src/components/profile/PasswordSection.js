import { useForm } from "../../hooks/useForm";
import { Alert } from "../ui/Alert";
import { Loading } from "../ui/Loading";

export const PasswordSection = () => {

    const [formValues, handleInputChange] = useForm({
        password: "",
        password2: ""
    });

    const {password, password2} = formValues;

    const handlePasswordChange = (e) => {
        e.preventDefault();
        console.log("handlePasswordChange");
    }

    return (
        <form onSubmit={handlePasswordChange}>
            <input type="password" className="form-control shadow-none profile-input-password" name="password" value={password}  onChange={handleInputChange} placeholder="Contraseña actual" maxLength="15" autoComplete="off" required />
            <input type="password" className="form-control shadow-none profile-input-password" name="password2" value={password2} onChange={handleInputChange} placeholder="Contraseña nueva" maxLength="15" autoComplete="off" required />

            {/* {loading && < Loading />}
            < Alert /> */}
            <button type="submit" className="btn btn-danger mt-4 shadow-none" title="Cambiar contraseña" disabled={!password && !password2}>
                <i className="fas fa-save" style={{ fontSize: '30px' }}></i>
            </button>
        </form>
    )
}
