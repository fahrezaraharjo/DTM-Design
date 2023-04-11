import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constant';

import './ProgramSection.scss';

const Program = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [programs, setPrograms] = useState([])
  const constraintsRef = useRef(null)
  useEffect(() => {
    const query = '*[_type == "program"]';
    client.fetch(query)
      .then((data) => {
        setPrograms(data)
      })
  }, [])
  return (
    <>
      <h1>Portfolio</h1>
    </>
  )
}

export default AppWrap(MotionWrap(Program), 'program', 'app__programbg')