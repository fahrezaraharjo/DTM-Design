import React from 'react';
import { images } from '../../constant';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo" />
        </div>
    </nav>
    
  )
}

export default Navbar