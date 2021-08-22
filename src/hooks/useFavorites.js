// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetFavorites } from "../actions/Movie";

export const useFavorites = () => {
    
    const dispatch = useDispatch();

    const getUserId = () => {
        const user = JSON.parse(localStorage.getItem("loggedUser"));

        if(user)
            return user.id;
        
        return null;
    }
    
    useEffect(() => {

        const userId = getUserId();

        if (userId) {
            dispatch(startGetFavorites(userId));
        }
    }, [dispatch]);
    
}
