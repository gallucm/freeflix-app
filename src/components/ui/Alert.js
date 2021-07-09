import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetMessage } from '../../actions/ui';

export const Alert = () => {

    const { loading, message } = useSelector(state => state.ui);

    const dispatch = useDispatch();

    const handleResetMessage = (e) => {
        e.preventDefault();

        dispatch(resetMessage());
    }

    return (
        <>
            {
                (!loading && message) && 
                <div className="alert alert-dismissible alert-success fade show alert-freeflix mt-4" role="alert">
                    {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetMessage}></button>
                </div>
            }
        </>
    )
}
