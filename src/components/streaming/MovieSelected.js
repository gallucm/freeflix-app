import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Navbar } from '../ui/Navbar';
import { Loading } from '../ui/Loading';

import { VideoPlayer } from './VideoPlayer';

import { startGetMovieById, startSetMovieSelected, setMovieNotFound } from '../../actions/Movie';

export const MovieSelected = () => {
    
    const dispatch = useDispatch();

    const { movieSelected, movieNotFound } = useSelector(state => state.movies);
    
    const { id } = useParams();

    useEffect(() => {
        if (!movieSelected){
            const movieStorage = localStorage.getItem('movieSelected');

            if (movieStorage){
                const movieJSON = JSON.parse(movieStorage);
                if (movieJSON.id !== id)
                    dispatch(setMovieNotFound()); 
                else
                    dispatch(startSetMovieSelected(movieJSON));
            } else {
                dispatch(startGetMovieById(id));                       
            }
        }
    }, [dispatch, movieSelected, id]);

    if (movieNotFound)
        return <Redirect to='/' />        
    
    return (
        <>
            <Navbar />
            {(movieSelected == null) && <Loading/>}

            {(movieSelected) && 
                <div className="container text-center animate__animated animate__fadeIn">
                    <div className="movie-title">
                        <h1>{movieSelected.title}</h1>
                    </div>
                    <div className="movie-year-gender">
                        <span>{movieSelected.year} - </span>
                        <span>{movieSelected.gender}</span>
                    </div>
                    <div className="movie-synopsis">
                        <span>{movieSelected.synopsis}</span>
                    </div>
                    <VideoPlayer/>
                </div>            
            }
        </>
    )
}