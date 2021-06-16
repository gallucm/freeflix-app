import React from 'react';
import { useSelector } from 'react-redux';

import { Navbar } from '../ui/Navbar';
import { Loading } from '../ui/Loading';
import { HomeButton } from '../ui/HomeButton';
import { VideoPlayer } from './VideoPlayer';

export const MovieSelected = () => {

    const { movieSelected } = useSelector(state => state.movies);
    
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