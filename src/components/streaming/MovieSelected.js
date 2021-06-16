import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Navbar } from '../ui/Navbar';
import { Loading } from '../ui/Loading';
import { HomeButton } from '../ui/HomeButton';

import { VideoPlayer } from './VideoPlayer';

import { startGetMovieById, startSetMovieSelected, setMovieNotFound } from '../../actions/Movie';

export const MovieSelected = () => {
    
    const dispatch = useDispatch();

    const { movieSelected, movieNotFound } = useSelector(state => state.movies);
    
    const { id } = useParams();

    useEffect(() => {
        if (movieSelected){
            if (movieSelected.id !== id)
                dispatch(setMovieNotFound());            
        } else {
            const movieStorage = localStorage.getItem('movieSelected');

            if (movieStorage)
                dispatch(startSetMovieSelected(JSON.parse(movieStorage)));
            else 
                dispatch(startGetMovieById(id));  
        }
    }, [dispatch, movieSelected, id]);

    if (movieNotFound)
        return <Redirect to='/' />
    
    return (
        <>
            <Navbar />
            {(movieSelected == null) && <Loading/>}

            {(movieSelected) && 
                <div className="container text-center mt-2">
                    <h1>{movieSelected.title}</h1>
                    <span>{movieSelected.synopsis}</span>
                    <VideoPlayer/>
                    <HomeButton/>                
                </div>            
            }
        </>
    )
}