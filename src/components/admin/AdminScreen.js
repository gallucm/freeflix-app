import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../ui/Logo';
import { Upload } from './Upload';
import { GenerateCode } from './GenerateCode';
import { MakeAdmin } from './MakeAdmin';


export const AdminScreen = () => {

    const [option, setOption] = useState('1');

    const handleOptionChange = (value) => {
        setOption(value.target.id);
    }

    return (
        <>
            <Logo />
            <div className="container">
                <div className="d-flex justify-content-center">
                    <button className="btn shadow-none admin-button" id="1" onClick={handleOptionChange}>Subir Archivos</button>
                    <button className="btn shadow-none admin-button" id="2" onClick={handleOptionChange}>Generar código</button>
                    <button className="btn shadow-none admin-button" id="3" onClick={handleOptionChange}>Asociar Admin</button>
                    <Link to="/" >
                        <button className="btn shadow-none admin-button">
                            <i class="fas fa-home"></i>
                        </button>
                    </Link>
                    <Link to="/login" >
                        <button className="btn shadow-none admin-button">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </Link>
                </div>
                <div>
                    {(option === '1') && <Upload />}

                    {(option === '2') && <GenerateCode />}

                    {(option === '3') && <MakeAdmin />}
                </div>
            </div>
        </>
    )
}
