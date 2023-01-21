import React from 'react';

import { Gallery, Footer, Banner, Art, Store, PromoC2 } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Banner />
            <Gallery />
            <Art />
            <Store />
            <PromoC2 />
            <Footer />
        </div>
    )
}

export default App