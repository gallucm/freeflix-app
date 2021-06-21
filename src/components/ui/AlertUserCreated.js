import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserCreated } from '../../actions/auth';

export const AlertUserCreated = () => {

    const { loading } = useSelector(state => state.ui);
    const { userCreated } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleResetUser = (e) => {
        e.preventDefault();
        dispatch(removeUserCreated());
    }

    return (
        <>
         {
             (!loading && userCreated) &&
             <div className="alert alert-dismissible alert-success fade show alert-freeflix" role="alert">
                 Cuenta creada correctamente. Ya puede iniciar sesión.
                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleResetUser}></button>
             </div>
         }   
        </>
    )
}
