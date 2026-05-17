import { useState } from 'react'
import { motion } from 'framer-motion' 

function ProjectCard({ image, title, description }) {

  return (
    <>
      <motion.div
        className='rounded-4xl overflow-hidden border-4 shadow-blue-300 shadow-lg border-gray-800'
        initial={{ opacity: 0, y:40}}
        whileInView={{ opacity: 1, y: 0}}
        transition={{ duration :0.6, delay: 0.5}}
        viewport= {{ once: true }}>
        <img src={image}></img>
        <div className="p-6">
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectCard