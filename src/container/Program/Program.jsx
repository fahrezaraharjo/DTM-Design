import React, { useRef ,useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { animate, motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Program.scss';


const Program = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [programs, setPrograms] = useState('');
  const [filterProgram, setFilterProgram] = useState([])

  const constraintsRef = useRef(null)


  useEffect(() => {
    const query = '*[_type == "program"]';

    client.fetch(query)
      .then((data) => {
        setPrograms(data);
        setFilterProgram(data)
      })
  }, [])



  return (
    <motion.div 
    ref={constraintsRef}
    className='carousel'>
        <h2 className='head-text'>Program</h2>
        <motion.div
          drag='x'
          dragConstraints={constraintsRef}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='inner-carousel'
        >
          {filterProgram.map((program, index) => (
            <div className='app__program-item' key={index}>
              <div className='app__program-img'>
                <img src={urlFor(program.imgUrl)} alt={program.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='app__program-hover'
                >
                  <a href={program.projectLink} target={program.projectLink} >
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

              <div className='app__program-content app__flex'>
                <h4 className='bold-text'>{program.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>{program.description}</p>

                <div className='app__program-tag app__flex'>
                  <p className='p-text'>{program.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
    </motion.div>
  )
}

export default AppWrap(MotionWrap(Program ),'program')