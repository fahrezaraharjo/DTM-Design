import React from 'react';

import { Program, Footer, Banner, Art, Store, PromoC2, EventCon } from '../../container';
import './Home.scss';

const Home = () => {
    return (
        <div className='app'>
            
            <Banner />
            <Program />
            <Art />
            <Store />
            <PromoC2 />
            <EventCon />
            <Footer />
        </div>
    )
}

export default Home