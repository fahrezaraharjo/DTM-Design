import React from 'react';

import { AboutIntro, AboutBidang, AboutContact, AboutDasar, AboutLingkup, AboutOur, AboutPortfolio, AboutVisi } from '../../section';
import './Abouts.scss';

const Home = () => {
    return (
        <div className='app'>
            <AboutIntro />
            <AboutDasar />
            <AboutLingkup />
            <AboutVisi />
            <AboutBidang />
            <AboutContact />
            <AboutOur />
            <AboutPortfolio />
        </div>
    )
}

export default Home