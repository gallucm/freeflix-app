import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCodeCreated } from '../../actions/Code';

export const AlertCodeGenerated = () => {

    const { loading } = useSelector(state => state.ui);
    const { codeGenerated } = useSelector(state => state.code);

    const dispatch = useDispatch();

    const handleResetCodeGenerated = (e) => {
        e.preventDefault();
        dispatch(removeCodeCreated());
    }

    return (
        <>
            {
                (!loading && codeGenerated) &&
                <div className="alert alert-dismissible alert-success fade show alert-freeflix mt-4" role="alert">
                    Código generado correctamente. Ya puede ser utilizado.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetCodeGenerated}></button>
                </div>
            }
        </>
    )
}
