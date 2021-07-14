import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGenerateCode } from '../../actions/Code';
import { randomeCode } from '../../helpers/Code';
import { AlertCodeGenerated } from '../ui/AlertCodeCreated';
import { LoadingRed } from '../ui/LoadingRed';

export const GenerateCode = () => {

    const { loading } = useSelector(state => state.ui);
    const { codeGenerated } = useSelector(state => state.code);

    const [code, setCode] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (codeGenerated && !loading)
            setCode('');
    }, [codeGenerated, loading])

    const handleGenerate = () => {
        setCode(randomeCode());
    }

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(startGenerateCode(code));
    }

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            <form onSubmit={handleSave}>
                                <div className="form-group codes-input">
                                    <input type="text" className="form-control shadow-none codes-input-code" name="code" value={code} disabled />

                                    <AlertCodeGenerated />

                                    {(loading) && <LoadingRed />}

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
