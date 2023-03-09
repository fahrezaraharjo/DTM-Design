import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Link } from 'react-router-dom';


import './AboutVisi.scss';


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
          <motion.div>

          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='about-item'
          >
            <Link to='/art'>
              <div className='about-content'>
                <h2>Visi<span>Misi. </span></h2>
                <p className='p-text' style={{ marginTop: 10 }}>
                  Visi dari PT. DJALOE TJIPTA MEDIA ini adalah dari tahu menjadi lebih tahu,
                  PT. DJALOE TJIPTA MEDIA bersama-sama dengan masyarakat untuk mengetahui segala hal,
                  utamanya hal-hal yang berkaitan dengan event dan promosi yang sedang ditanganinya.
                  Misi dari PT. DJALOE TJIPTA MEDIA
                  ini adalah mendekatkan masyarakat dengan lembaga masyarakat baik formal maupun informal.
                  Tujuan dari PT. DJALOE TJIPTA MEDIA ini sendiri adalah
                  •Profit Objecve, yang bertujuan untuk mendapatkan laba bagi perusahaan.
                  •Service Objecve, bertujuan memberikan pelayanan jasa yang baik kepada konsumen,
                  arnya membantu mempernggi nilai barang dan jasa
                  maupun image suatu perusahaan yang ditanganinya.
                  •Social Objecve, bertujuan untuk ikut serta membantu masyarakat.
                  •Personal Objecve, sebagai wadah menampung kreavitas anak muda dan sekaligus secara
                  individual economic maupun sosial Psycological seap pekerja
                  mendapat kepuasan dalam bidang pekerjannya.
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