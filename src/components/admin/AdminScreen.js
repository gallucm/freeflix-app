import { useState } from 'react';

import { Upload } from './Upload';
import { Users } from './Users';
import { types } from '../../types/types';

import { Movies } from './Movies';
import { Codes } from './Codes';
import { Navbar } from '../ui/Navbar';


export const AdminScreen = () => {

    const [option, setOption] = useState(types.adminUpload);

    const handleOption = (option) => {
        setOption(option);
    }

    return (
        <>
            {<Navbar searchAllowed={false} optionsAllowed={false} />}
            <div className="main-container">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="section-content">
                            <div className="form-group profile-input">
                                <div className="row">
                                    <div className="form-group profile-input-options">
                                        <div className="profile-input-options-edit" onClick={() => { handleOption(types.adminUpload) }}>
                                            <h5>Nueva pelicula</h5>
                                        </div>
                                        <div className="profile-input-options-edit" onClick={() => { handleOption(types.adminMovies) }}>
                                            <h5>Peliculas</h5>
                                        </div>
                                        <div className="profile-input-options-edit" onClick={() => { handleOption(types.adminCodes) }}>
                                            <h5>Códigos</h5>
                                        </div>
                                        <div className="profile-input-options-edit" onClick={() => { handleOption(types.adminUsers) }}>
                                            <h5>Usuarios</h5>
                                        </div>
                                    </div>
                                    <div className="col profile-input-option-selected">
                                        {(option === types.adminUpload) && <Upload />}

                                        {(option === types.adminMovies) && <Movies />}

                                        {(option === types.adminCodes) && <Codes />}

                                        {(option === types.adminUsers) && <Users />}
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
