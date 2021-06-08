import React from 'react'
import { Footer } from './components/ui/Footer'
import { AppRouter } from './routers/AppRouter'

export const FreeFlixApp = () => {
    return (
        <div>
            <AppRouter/>      
            <Footer/>      
        </div>
    )
}
