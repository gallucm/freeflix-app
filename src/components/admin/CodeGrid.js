import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteCode } from '../../actions/Code';

export const CodeGrid = ({ code }) => {

    const { loading } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const handleDeleteCode = (id) => {
        dispatch(startDeleteCode(id));
    }

    return (
        <div key={code.code}>
            <>
                {   
                    (!loading) &&
                    <h3 className={(code.used ? 'text-danger' : 'text-success')}>{code.code}
                        <button type="button" className="btn  btn-freeflix shadow-none ms-4" onClick={() => {handleDeleteCode(code.id)}}>
                            <i className="far fa-trash-alt"  style={{fontSize: '15px'}}></i>
                        </button>
                    </h3> 
                }
            </>
        </div>
    )
}
