import React, { useRef, useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { images } from '../../constant';

import './EventSection.scss';

const EventCon = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [events, setEvents] = useState([]);
  const constraintsRef = useRef(null)
  useEffect(() => {
    const query = '*[_type == "event"]';

    client.fetch(query)
      .then((data) => {
        setEvents(data);
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
        <motion.div
          drag='x'
          dragConstraints={constraintsRef}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='inner-carousel'
        >
          {events.map((store, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__store-item app__flex'
              key={index}>
              <a href="/event">
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
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(EventCon), 'event', 'app__eventbg')