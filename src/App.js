import React from 'react';

import { Gallery, Footer, Banner, Art } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Banner />
            <Gallery />
            <Art />
            <Footer />
        </div>
    )
}

export default App