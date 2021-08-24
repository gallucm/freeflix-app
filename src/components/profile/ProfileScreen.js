import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Profile } from './Profile';

export const ProfileScreen = () => {
    return (
        <>
            <Navbar allowed={false} />
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Profile/>
                </div>
            </div>
        </>

    )
}
