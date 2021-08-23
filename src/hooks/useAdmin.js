import { getLoggedUser } from "../helpers/User"
import { types } from "../types/types";

export const useAdmin = () => {
    const user = getLoggedUser();

    if (user)
        return user.role === types.roleAdmin;

    return false;
}