// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetMovies } from "../actions/Movie";

export const useMovies = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startGetMovies());
    }, [dispatch]);
    
}
