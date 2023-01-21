import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './PromoC2.scss';


const PromoC2 = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "promoc2"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>PromoC2</h2>
      <div className='app__profile'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__promoc2-item'
            key={about.title + index }
          >
            <div className='container__promo-img'>
            <img src={urlFor(about.imgUrl)} alt="about.title" />
            </div>
            <div className='description-artikel'>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}
export default AppWrap(
  MotionWrap(PromoC2, 'app__about'),
  'promoc2',
  'app__whitebg',
);