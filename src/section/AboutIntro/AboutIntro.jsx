import React, { useRef, useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';
import { images } from '../../constant';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { Link } from 'react-router-dom';


import './AboutIntro.scss';


const AboutIntro = () => {
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
      {/* <div className='about-intro__wrapper'>
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
                <h2>Dasar |<span>Pemikiran. </span></h2>
                <p className='p-text' style={{ marginTop: 10 }}>Era globalisasi yang semakin komunikaf mengakibatkan cepatnya informasi yang dapat diperoleh
                  seap orang. Informasi yang didapat dapat berupa ilmu pengetahuan atau hanya hiburan
                  baik berupa musik atau berupa pagelaran seni yang dapat dinikma oleh seap orang.
                  Sarana pemberi informasi banyak macamnya dari menyajikan visualnya saja audionya saja dan
                  juga menampilkan audio visual yang masing masing memiliki kelebihan dan kekurangan.
                  Makin besar animo masyarakat akan hiburan makin besar pula peluang bisnis untuk jasa hiburan.
                  Latar belakang bisnis bisnis yang berorientasi kepada perkembangan teknologi serta psikologi masyarakat
                  tentunya harus mempunyai tujuan yang jelas dan terarah. Dan hal ini penng agar bisnis yang dijalankan
                  tetap dapat bertahan dengan adanya good will dari konsumen, ditengah persaingan usaha yang berbasiskan
                  producon house, event organizer jdan teknologi juga kegiatan lain .
                  tujuan bisnis yang lebih luas adalah mampu bersaing secara terbuka dengan produk-produk yang datang
                  dari luar sehingga dapat meningkatkan kinerja bisnis agar tetap bertahan serta eksisnya
                  produk yang kita hasilkan di tengah pasar yang penuh dengan persaingan.</p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div> */}
    </>
  )
}

export default AppWrap(MotionWrap(AboutIntro,), 'art',
  'app__eventbg'
)