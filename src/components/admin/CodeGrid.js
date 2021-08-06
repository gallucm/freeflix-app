import React from 'react';
import { useDispatch } from 'react-redux';
import { startDeleteCode } from '../../actions/Code';

export const CodeGrid = ({ code }) => {

    const dispatch = useDispatch();

    const handleDeleteCode = (code) => {
        dispatch(startDeleteCode(code));
    }

    return (
        <div key={code.code} className="mt-2">

            <div className="row items-center">
                <div className="col-1">
                    <span className={(code.used ? 'text-danger' : 'text-success col-10')} style={{ fontWeight: 'bold' }}>{code.code}
                    </span>

                </div>
                <div className="col-1 ms-2">
                    <button type="button" className="btn btn-freeflix shadow-none" onClick={() => { handleDeleteCode(code) }} title="Eliminar">
                        <i className="far fa-trash-alt" style={{ fontSize: '15px' }}></i>
                    </button>

                </div>
            </div>

        </div>
    )
}
