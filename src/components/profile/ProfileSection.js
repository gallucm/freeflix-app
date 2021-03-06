import { useDispatch, useSelector } from "react-redux";
import { startUpdateUser } from "../../actions/auth";
import { startUpdateImageProfile } from "../../actions/User";
import profileImage from '../../assets/images/not-profile.jpg';
import { useForm } from "../../hooks/useForm";
import { Loading } from "../ui/Loading";

export const ProfileSection = () => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.loggedUser);
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm(user);

    const { userName, email } = formValues;

    const handleChangeProfile = (e) => {
        e.preventDefault();
        dispatch(startUpdateUser(formValues));
    }

    const handleImageChange = (e) => {
        e.preventDefault();

        const image = document.getElementById('myfile').files[0];

        dispatch(startUpdateImageProfile(user.id, image, user.imageProfile.id));
    }

    return (
        <>
            <form onSubmit={handleChangeProfile}>
                <div className="container-profilepic card rounded-circle overflow-hidden mt-2">
                    <img src={user.imageProfile ? user.imageProfile.url : profileImage} alt={profileImage} />
                    <div className="middle-profilepic text-center card-img-overlay d-none flex-column justify-content-center" onClick={() => document.getElementById('myfile').click()}>
                        <div className="text-profilepic" htmlFor="myfile">
                            <i className="fas fa-camera"></i>
                            <span className="text-profilepic"> Cambiar</span>
                            <input type="file" id="myfile" style={{ display: 'none' }} name="myfile" onChange={handleImageChange} />
                        </div>
                    </div>
                </div>

                <input type="text" className="form-control shadow-none profile-input-username" name="userName" value={userName} onChange={handleInputChange} placeholder="Usuario" maxLength="15" autoComplete="off" required />
                <input type="email" className="form-control shadow-none profile-input-email mb-2" name="email" value={email} onChange={handleInputChange} placeholder="Email" maxLength="40" autoComplete="off" required />

                <button type="submit" className="btn btn-danger mt-4 mb-4 shadow-none" title="Guardar cambios">
                        {(!loading) && <i className="fas fa-save" style={{ fontSize: '30px' }}></i>}
                        {(loading) && <Loading />}
                </button>
            </form>
        </>
    )
}
