import React from 'react';

import { Navbar } from '../ui/Navbar';
import { CategoryFilters } from './CategoryFilters';
import { Movies } from './Movies';

export const HomeScreen = () => {

    return (
        <>
            <Navbar />                
            <div className="container mt-4 mb-4">
                <CategoryFilters/>      
                <Movies/>
            </div>
        </>
    )
}
