import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constant';
import { Link } from 'react-router-dom';


import './StoreSection.scss';

const Store = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [stores, setStores] = useState([])

  const constraintsRef = useRef(null)


  useEffect(() => {
    const query = '*[_type == "store"]';

    client.fetch(query)
      .then((data) => {
        setStores(data);
      })
  }, [])

  return (
    <>
     <h1>OUR</h1>
    </>
  )
}

export default AppWrap(MotionWrap(Store), 'store', 'app__storebg')