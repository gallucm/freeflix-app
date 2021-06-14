import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../ui/Logo';
import { Upload } from './Upload';
import { GenerateCode } from './GenerateCode';
import { MakeAdmin } from './MakeAdmin';
import { types } from '../../types/types';

import { NavbarAdmin } from './NavbarAdmin';


export const AdminScreen = () => {

    const [option, setOption] = useState('1');

    const handleOptionChange = (value) => {
        setOption(value.target.id);
    }

    return (
        <>
            {/* <Logo /> */}
            <NavbarAdmin/>
            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <button className="btn shadow-none admin-button" id="[admin] upload" onClick={handleOptionChange}>Subir Archivos</button>
                    <button className="btn shadow-none admin-button" id="[admin] generate" onClick={handleOptionChange}>Generar código</button>
                    <button className="btn shadow-none admin-button" id="[admin] make" onClick={handleOptionChange}>Asociar Admin</button>
                    {/* <Link to="/" >
                        <button className="btn shadow-none admin-button">
                            <i class="fas fa-home"></i>
                        </button>
                    </Link>
                    <Link to="/login" >
                        <button className="btn shadow-none admin-button">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </Link> */}
                </div>
                <div>
                    {(option === types.adminUpload) && <Upload />}

                    {(option === types.adminGenerate) && <GenerateCode />}

                    {(option === types.adminMake) && <MakeAdmin />}
                </div>
            </div>
        </>
    )
}
