import React from 'react';

import { Program, Footer, Banner, Art, Store, PromoC2, Event } from '../../section';
import './Home.scss';

const Home = () => {
    return (
        <div className='app'>
            <Banner />
            <Program />
            <Art />
            <Store />
            <PromoC2 />
            <Event />
            <Footer />
        </div>
    )
}

export default Home