import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Art.scss';


const Art = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [arts, setArts] = useState('');
  const [filterArt, setFilterArt] = useState([])

  useEffect(() => {
    const query = '*[_type == "art"]';

    client.fetch(query)
      .then((data) => {
        setArts(data);
        setFilterArt(data)
      })
  }, [])
  return (
    <>
      <h2 className='head-text'>Art</h2>


      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__art-portfolio'
      >
        {filterArt.map((art, index) => (
          <div className='app__art-item app__flex' key={index}>
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
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Art, 'art',
'app__whitebg'
)