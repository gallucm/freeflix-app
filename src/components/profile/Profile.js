

import { useState } from 'react';
import { types } from '../../types/types';
import { PasswordSection } from './PasswordSection';
import { ProfileSection } from './ProfileSection';

export const Profile = () => {
    
    const [option, setOption] = useState(types.optionProfile);

    const handleOption = (option) => {
        setOption(option);
    }

    return (
        <>
            <div className="text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                                <div className="form-group profile-input">
                                    <div className="row">
                                        <div className="form-group profile-input-options">
                                            <div className="profile-input-options-edit" onClick={() => {handleOption(types.optionProfile)}}>
                                                <h5>Perfil</h5>
                                            </div>
                                            <div className="profile-input-options-pswd" onClick={() => {handleOption(types.optionPassword)}}>
                                                <h5>Contraseña</h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            {option === types.optionProfile
                                                ? <ProfileSection />
                                                : <PasswordSection/>
                                            } 
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
