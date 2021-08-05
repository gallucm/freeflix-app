// import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetCodes } from "../actions/Code";

export const useCodes = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startGetCodes());
    }, [dispatch]);
    
}
