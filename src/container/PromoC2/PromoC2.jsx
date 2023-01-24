import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './PromoC2.scss';
import { AiFillEye } from 'react-icons/ai';


const PromoC2 = () => {
  const [promos, setPromos] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const constraintsRef = useRef(null)


  useEffect(() => {
    const query = '*[_type == "promoc2"]';

    client.fetch(query).then((data) => {
      setPromos(data);
    });
  }, []);

  return (
    <motion.div
      ref={constraintsRef}
      className='carousel'>
      <h2 className='head-text'>PromoC2</h2>
      <motion.di
        drag='x'
        dragConstraints={constraintsRef}
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='inner-carousel'
      >
        {promos.map((promo, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__promoc2-item'
            key={promo.title + index}
          >
            <div className='container__promo-img'>
              <a href={promo.projectLink} target={promo.projectLink} >
              <img src={urlFor(promo.imgUrl)} alt="promo.title" />
              </a>
            </div>
            <div className='description-artikel'>
              <h2 className='bold-text' style={{ marginTop: 20 }}>{promo.title}</h2>
              <p className='p-text' style={{ marginTop: 10 }}>{promo.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.di>
    </motion.div>
  )
}
export default AppWrap(
  MotionWrap(PromoC2, 'app__promo'),
  'promoc2',
  'app__whitebg',
);