import Swal from 'sweetalert2';

// import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

import { createUser } from '../helpers/User';

export const registerUser = (user) => {
    return async (dispatch) => {
        loadingCreatingUser();

        dispatch(startLoading());

        const isCreated = await createUser(user);

        dispatch(finishLoading());

        if (isCreated){
            userHasBeenCreated();
        } else {
            errorCreatingUser();
        }
    }
}

const loadingCreatingUser = () => {
    Swal.fire({
        icon: 'info',
        title: 'Por favor espere',
        html: 'Creando usuario...',
        showConfirmButton: false,
        allowOutsideClick: false
    });
}

const userHasBeenCreated = async () => {
    const data = await Swal.fire({
        icon: 'success',
        title: 'Confirmación',
        html: 'Usuario creado correctamente. Ya puede iniciar sesión.'
    });

    return data.isConfirmed;
};

const errorCreatingUser = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Error',
        html: 'Ha ocurrido un error al crear el usuario.'
    });
}

export const errorDiferentPasswords = () => {
    Swal.fire({
        icon: 'warning',
        title: 'Error',
        html: 'Las contraseñas ingresadas no coinciden. Por favor, ingreselas nuevamente'
    });
}
