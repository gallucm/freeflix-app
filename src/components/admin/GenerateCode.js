import React from 'react';
import { useState } from 'react';
import { randomeCode, saveCode } from '../../helpers/Code';

export const GenerateCode = () => {

    const [code, setCode] = useState('');

    const handleGenerate = () => {
        setCode(randomeCode());
    }

    const handleSave = async (e) => {
        e.preventDefault();

        const isSaved = await saveCode(code);

        if (isSaved)
            setCode('');
    } 

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            <form onSubmit={handleSave}>
                                <h3 className="mt-4">Generar Código</h3>
                                <div className="form-group codes-input">
                                    <input type="text" className="form-control shadow-none codes-input-code" name="code" value={code} disabled/>
                                    <button type="button" className="btn shadow-none btn-wide-freeflix" onClick={handleGenerate}>
                                        <i className="fas fa-random me-2"></i>
                                        Generar
                                    </button>
                                </div>
                                <button type="submit" className="btn shadow-none btn-wide-freeflix" disabled={!code}>
                                    <i className="fas fa-save me-2"></i>
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
