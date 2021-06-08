import React from 'react';

import { Navbar } from '../ui/Navbar';
import { HomeButton } from '../ui/HomeButton';
import { VideoPlayer } from './VideoPlayer';

export const MovieSelected = () => {
    return (
        <>
            <Navbar />
            <div className="container text-center mt-5">
                <h1>Movie Title</h1>
                <span>Sinopsis</span>
                <VideoPlayer/>
                <HomeButton/>                
            </div>
        </>
    )
}