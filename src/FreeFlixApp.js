import React from 'react'
import { Provider } from 'react-redux';

import { Footer } from './components/ui/Footer'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store';

export const FreeFlixApp = () => {
    return (
        <div>
            <Provider store={store}>
                <AppRouter/>      
                <Footer/>   
            </Provider>   
        </div>
    )
}
