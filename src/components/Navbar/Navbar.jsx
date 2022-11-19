import React from 'react';
import { images } from '../../constant';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo" />
        </div>
        <ul>
          {['home', 'about', 'contact', 'work', 'skills', 'testimonial'].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
          ))}
        </ul>
    </nav>
    
  )
}

export default Navbar