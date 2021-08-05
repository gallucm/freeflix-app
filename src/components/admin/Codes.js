import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGetCodes, startSaveCode } from '../../actions/Code';
import { randomeCode } from '../../helpers/Code';
import { useCodes } from '../../hooks/useCodes';
import { Loading } from '../ui/Loading';
import { LoadingRed } from '../ui/LoadingRed';
import { CodeGrid } from './CodeGrid';

export const Codes = () => {

    useCodes();

    const { loading } = useSelector(state => state.ui);
    const { codes } = useSelector(state => state.code);

    const dispatch = useDispatch();

    const handleGenerate = (e) => {
        e.preventDefault();

        const generated = randomeCode();

        dispatch(startSaveCode(generated));
    }

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            {loading && <LoadingRed />}

                            {!loading &&
                                <button type="button" className="btn shadow-none btn-freeflix mt-4" onClick={handleGenerate}>
                                    {loading ? <Loading /> :
                                        <>
                                            <i className="fas fa-random me-2"></i>
                                            Generar
                                        </>
                                    }

                                </button>
                            }

                            {(!loading && codes) &&
                                <div className="codes-list">
                                    {
                                        codes.map(code => (
                                            <CodeGrid code={code} key={code.id} />
                                        ))
                                    }
                                </div>
                            }

                            {(!loading && codes.length === 0) &&
                                <div className="mt-4">
                                    <h4> No existen códigos de invitación </h4>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
