import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser, makeAdmin } from "../../actions/User";
import { types } from "../../types/types";
import { LoadingRed } from "../ui/LoadingRed";

export const Users = () => {

    const { loading } = useSelector(state => state.ui);
    const { users }  = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const handleDeleteUser = (id) => {
        dispatch(deleteUser(id));
    }

    const handleMakeAdmin = (id, role) => {
        dispatch(makeAdmin(id, role));
    }

    return (
        <>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="section-content">
                            {(loading) && <LoadingRed />}

                            {(!loading && users.length > 0) && 
                                <div className="mt-4">
                                    {
                                        users.map(user => (                                            
                                            <div key={user.id} className="row row-cols-auto justify-content-center mt-2">
                                                <div className="col-2 text-justify">
                                                    <span style={{fontSize: '25px'}}>{user.userName}</span>
                                                </div>
                                                <div className="col-1">
                                                    <button type="button" className="btn btn-freeflix shadow-none" 
                                                            onClick={() => {handleMakeAdmin(user.id, user.role)}} 
                                                            title={(user.role !== types.roleAdmin) ? 'Dar permisos de administrador' : 'Quitar permisos de administrador'}
                                                    >
                                                        <i class={(user.role !== types.roleAdmin) ? "fas fa-user-shield" : "fas fa-user"} style={{fontSize: '15px'}}></i>
                                                    </button>
                                                </div>
                                                <div className="col-1">
                                                    <button type="button" className="btn btn-freeflix shadow-none" onClick={() => {handleDeleteUser(user.id)}} title="Eliminar">
                                                        <i className="far fa-trash-alt"  style={{fontSize: '15px'}}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            }

                            {
                                (!loading && users.length === 0) && 
                                <div className="mt-4"> 
                                    <h4>Actualmente no hay usuarios para mostrar</h4>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
