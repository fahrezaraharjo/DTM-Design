import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './ArtSection.scss';


const Event = () => {
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
      <div className='app__content-wrapper'>
        <div className='program-title'>
          <img src={images.art} alt="logo" />
        </div>x
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
            {arts.map((art, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='app__art-item app__flex'
                key={index}>
                <a href="/art">
                  <div className='app__art-img app__flex'>
                    <img src={urlFor(art.imgUrl)} alt={art.name} />
                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                      className='app__art-hover app__flex'
                    >
                      <a href={art.projectLink} target={art.projectLink} >
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                          className='app__flex'
                        >
                          <AiFillEye />
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>

                  <div className='app__art-content app__flex'>
                    <h4 className='bold-text'>{art.title}</h4>
                    <p className='p-text' style={{ marginTop: 10 }}>{art.description}</p>

                    <div className='app__art-tag app__flex'>
                      <p className='p-text'>{art.tags[0]}</p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Event,), 'art',
  'app__artbg'
)