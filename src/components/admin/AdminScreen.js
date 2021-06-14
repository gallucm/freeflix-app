import React from 'react';
import { useState } from 'react';

import { Upload } from './Upload';
import { GenerateCode } from './GenerateCode';
import { MakeAdmin } from './MakeAdmin';
import { types } from '../../types/types';

import { NavbarAdmin } from './NavbarAdmin';


export const AdminScreen = () => {

    const [option, setOption] = useState(types.adminUpload);

    const handleOptionChange = (value) => {
        setOption(value.target.id);
    }

    return (
        <>
            <NavbarAdmin/>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button className="btn shadow-none admin-button" id="[admin] upload" onClick={handleOptionChange}>Subir Archivos</button>
                    <button className="btn shadow-none admin-button" id="[admin] generate" onClick={handleOptionChange}>Generar código</button>
                    <button className="btn shadow-none admin-button" id="[admin] make" onClick={handleOptionChange}>Asociar Admin</button>
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
