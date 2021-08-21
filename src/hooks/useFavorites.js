// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetFavorites } from "../actions/Movie";

export const useFavorites = () => {
    
    const dispatch = useDispatch();

    const getUserId = () => {
        const userId = localStorage.getItem("user-id");
        return userId;
    }
    
    useEffect(() => {
        dispatch(startGetFavorites(getUserId()));
    }, [dispatch]);
    
}
