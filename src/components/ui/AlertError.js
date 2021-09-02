import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../../actions/ui';

export const AlertError = () => {

    const dispatch = useDispatch();

    const { error } = useSelector(state => state.ui);

    const handleResetError = (e) => {
        e.preventDefault();
        dispatch(removeError());
    }

    return (
        <>
            {error &&
                <div className="alert alert-dismissible alert-danger fade show alert-freeflix animate__animated animate__jello mt-4" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetError}></button>
                </div>
            }
        </>
    )
}
