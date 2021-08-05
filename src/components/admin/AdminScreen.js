import React from 'react';
import { useState } from 'react';

import { Upload } from './Upload';
import { Users } from './Users';
import { types } from '../../types/types';

import { NavbarAdmin } from './NavbarAdmin';
import { Movies } from './Movies';
import { Codes } from './Codes';


export const AdminScreen = () => {

    const [option, setOption] = useState(types.adminUpload);

    const handleOptionChange = (value) => {
        setOption(value.target.id);
    }

    return (
        <>
            <NavbarAdmin />
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button className="btn shadow-none admin-button" id={types.adminUpload} onClick={handleOptionChange}>Nueva pelicula</button>
                    <button className="btn shadow-none admin-button" id={types.adminMovies} onClick={handleOptionChange}>Peliculas</button>
                    <button className="btn shadow-none admin-button" id={types.adminCodes} onClick={handleOptionChange}>Códigos</button>
                    <button className="btn shadow-none admin-button" id={types.adminUsers} onClick={handleOptionChange}>Usuarios</button>
                </div>
                <div>
                    {(option === types.adminUpload) && <Upload />}

                    {(option === types.adminMovies) && <Movies />}

                    {(option === types.adminCodes) && <Codes />}

                    {(option === types.adminUsers) && <Users />}
                </div>
            </div>
        </>
    )
}
