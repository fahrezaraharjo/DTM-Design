import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Link } from 'react-router-dom';


import './AboutIntro.scss';


const AboutIntro = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [arts, setArts] = useState([])
  const constraintsRef = useRef(null)
  useEffect(() => {
    const query = '*[_type == "art"]';
    client.fetch(query)
      .then((data) => {
        setArts(data)
      })
  }, [])
  return (
    <>
      <h1>Contact</h1>
    </>
  )
}

export default AppWrap(MotionWrap(AboutIntro,), 'art',
  'app__eventbg'
)