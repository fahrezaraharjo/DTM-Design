import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Link } from 'react-router-dom';


import './AboutLingkup.scss';


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
      <div className='about-intro__wrapper'>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='card-about'
        >
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='about-item'
          >
            <Link to='/art'>
              <div className='about-content'>
                <h2>Lingkup<span>Bisnis.</span></h2>
                <p className='p-text' style={{ marginTop: 10 }}>
                  PT. DJALOE TJIPTA MEDIA merupakan
                  perusahaan yang bergerak di bidang jasa
                  Digital Media Services, promosi dan teknologi
                  yaitu berupa Producon House, event organizer,
                  adversing, talent management, media Tv dan
                  Radio, dan masih banyak lagi dengan tujuan untuk
                  dikonsumsi oleh masyarakat secara luas baik
                  berupa hiburan atau bersifat educaon Profle 2023.
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Event,), 'art',
  'app__eventbg'
)