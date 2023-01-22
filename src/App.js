import React from 'react';

import { Program, Footer, Banner, Art, Store, PromoC2 } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Banner />
            <Program />
            <Art />
            <Store />
            <PromoC2 />
            <Footer />
        </div>
    )
}

export default App