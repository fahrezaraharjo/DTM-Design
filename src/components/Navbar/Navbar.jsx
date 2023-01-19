import React, { useState } from 'react';
import { images } from '../../constant';
import './Navbar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaTiktok, FaTwitter, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['program', 'art', 'store', 'promo', 'event'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <ul className='app__navbar-links-right'>
      <li className='nav-item'>
              <a href='https://twitter.com/'>
                <FaTwitter />
              </a>
            </li>
            <li className='nav-item'>
              <a href='https://tiktok.com/'>
                <FaTiktok />
              </a>
            </li>
            <li className='nav-item'>
              <a href='https://instagram.com/'>
                <FaInstagramSquare />
              </a>
            </li>
            <li className='nav-item'>
              <a href='https://youtube.com/'>
                <FaYoutubeSquare />
              </a>
            </li>
            <li>
              <a
                href='/login'
              
              
              >
                Sign Up/Sign In
              </a>
            </li>
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
              {['program', 'art', 'store', 'promo', 'event'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>

  )
}

export default Navbar