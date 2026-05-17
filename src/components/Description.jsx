import { useState } from 'react'
import { motion } from 'framer-motion'

function Description() {

  return (
    <>
        <div className="relative z-10">
          <motion.h3
            initial = {{ opacity : 0, y:20 }}
            animate = {{ opacity: 1, y: 0}}
            transition = {{ duration : 0.6, delay:0.4 }}
            className='leading-14 justify-center text-center text-2xl pt-15 font-bold text-white'>Student Athlete & Software Engineer
          </motion.h3>

          <motion.h1
            className='text-center text-8xl font-bold bg-gradient-to-r from-amber-500 from-30% to-pink-500 to-70% bg-clip-text text-transparent'
            initial = {{ opacity : 0, y:20 }}
            animate = {{ opacity: 1, y: 0}}
            transition = {{ duration : 0.6, delay:0.6 }}>
              SHIMOMURA
          </motion.h1>

          <motion.h3
            className='font-light justify-center text-center text-2xl pt-7 font-bold text-white'
            initial = {{ opacity : 0, y:20 }}
            animate = {{ opacity: 1, y: 0}}
            transition = {{ duration : 0.6, delay:0.8 }}
            >I create projects with an emphasis on <br/> relevancy and passion.

          </motion.h3>
        </div>
    </>
  )
}

export default Description