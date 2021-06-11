import React from 'react';

import { Navbar } from '../ui/Navbar';
import { CategoryFilters } from './CategoryFilters';
import { Movies } from './Movies';

// import { addUser } from '../../helpers/User';

export const HomeScreen = () => {

    // const handleCreate = () => {
    //     const user = {
    //         name: 'user4',
    //         email: 'user4@example.com',
    //         password: 'pass1234'
    //     }

    //     addUser(user)
    //         .then(id => {
    //             console.log('id', id)
    //         })
    //         .catch(err => {
    //             console.log('error', err)
    //         })
    //         .finally(() => {
    //             console.log('finally')
    //         });       
    // }

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
