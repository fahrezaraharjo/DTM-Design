import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './EventCon.scss';
import { images } from '../../constant';


const EventCon = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [stores, setStores] = useState('');
  const [filterStore, setFilterStore] = useState([])

  const constraintsRef = useRef(null)


  useEffect(() => {
    const query = '*[_type == "event"]';

    client.fetch(query)
      .then((data) => {
        setStores(data);
        setFilterStore(data)
      })
  }, [])

  return (
    <>
      <div className='program-title'>
        <img src={images.event} alt="logo" />
      </div>

      <motion.div
        ref={constraintsRef}
        className='carousel'>
        <a href="/event">
          <motion.div
            drag='x'
            dragConstraints={constraintsRef}
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className='inner-carousel'
          >
            {filterStore.map((store, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__store-item app__flex'
                key={index}>
                <div className='app__store-img app__flex'>
                  <img src={urlFor(store.imgUrl)} alt={store.name} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className='app__store-hover app__flex'
                  >

                  </motion.div>
                </div>

                <div className='app__store-content app__flex'>
                  <h4 className='bold-text'>{store.title}</h4>


                  <div className='app__store-tag app__flex'>
                    <p className='p-text'>{store.tags[0]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </a>
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(EventCon), 'event', 'app__eventbg')