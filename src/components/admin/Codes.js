import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startGetCodes } from '../../actions/Code';
import { LoadingRed } from '../ui/LoadingRed';
import { CodeGrid } from './CodeGrid';

export const Codes = () => {

    const { loading } = useSelector(state => state.ui);
    const { codes } = useSelector(state => state.code);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetCodes());
    }, [dispatch]);

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            {loading && <LoadingRed />}

                            {(codes) &&
                                <div className="codes-list">
                                    {
                                        codes.map(code => (
                                            <CodeGrid code={code} key={code.id}/>
                                            ))
                                    }
                                </div>
                            }

                            {(codes.length === 0 && !loading) &&
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
