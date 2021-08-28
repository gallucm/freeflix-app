import profileImage from '../../assets/images/not-profile.jpg';

import { getLoggedUser } from '../../helpers/User';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateUser } from '../../actions/auth';
import { Alert } from '../ui/Alert';
import { Loading } from '../ui/Loading';
import { startUpdateImageProfile } from '../../actions/User';

export const Profile = () => {

    const { loading } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const user = getLoggedUser();

    const [formValues, handleInputChange] = useForm(user);

    const { userName, email } = formValues;

    const handleChangeProfile = (e) => {
        e.preventDefault();
        dispatch(startUpdateUser(formValues));
    }

    const handleImageChange = (e) => {
        e.preventDefault();

        const image = document.getElementById('myfile').files[0];

        dispatch(startUpdateImageProfile(user.id, image));
    }

    return (
        <>
            <div className="text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            <form onSubmit={handleChangeProfile}>
                                <div className="form-group profile-input">
                                    <div className="container-profilepic card rounded-circle overflow-hidden">
                                        <img src={user.imageProfile ? user.imageProfile : profileImage} alt={profileImage} />
                                        <div className="middle-profilepic text-center card-img-overlay d-none flex-column justify-content-center" onClick={()=> document.getElementById('myfile').click()}>
                                            <div className="text-profilepic" htmlFor="myfile">
                                                <i className="fas fa-camera"></i>
                                                <span className="text-profilepic">Cambiar</span>
                                                <input type="file" id="myfile" style={{display: 'none'}} name="myfile" onChange={handleImageChange}/>
                                            </div>
                                        </div>
                                    </div>

                                    <input type="text" className="form-control shadow-none profile-input-username" name="userName" value={userName} onChange={handleInputChange} placeholder="Usuario" maxLength="15" autoComplete="off" required />
                                    <input type="email" className="form-control shadow-none profile-input-email mb-2" name="email" value={email} onChange={handleInputChange} placeholder="Email" maxLength="40" autoComplete="off" required />

                                    {loading && < Loading />}
                                    < Alert />
                                    <input type="submit" className="btn btn-success mt-4" value="Actualizar datos" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
