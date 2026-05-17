import { useState } from 'react'
import { motion } from 'framer-motion'

function About() {

  return (
    <>
        <div id = "about" className="relative z-10 max-w-2xl mx-auto px-6 pt-210 pb-20">
      <motion.h2 className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2}}
        viewport={{ once: true }}>About Me
      </motion.h2>
      <div className="divide-y divide-gray-800">
        <motion.div
          className="flex justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}>
          <span className="text-sm text-gray-300">Name</span>
          <span className="text-sm text-white">Kent Shimomura</span>
        </motion.div>
        <motion.div
          className="flex justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5}}
          viewport={{ once: true }}>
          <span className="text-sm text-gray-300">Ethnicity</span>
          <span className="text-sm text-white">Japanese American</span>
        </motion.div>
        <motion.div
          className="flex justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6}}
          viewport={{ once: true }}>
          <span className="text-sm text-gray-300">Age</span>
          <span className="text-sm text-white">16</span>
        </motion.div>
        <motion.div
          className="flex justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7}}
          viewport={{ once: true }}>
          <span className="text-sm text-gray-300">Location</span>
          <span className="text-sm text-white">Yuba City, California</span>
        </motion.div>
        <motion.div
          className="flex justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8}}
          viewport={{ once: true }}>
          <span className="text-sm text-gray-300">Hobbies</span>
          <span className="text-sm text-white">Tennis, Traveling, Video Games, Custom Keyboards</span>
        </motion.div>
        <motion.div
          className="flex justify-between py-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9}}
          viewport={{ once: true }}>
          <span className="text-sm text-gray-300">Learning</span>
          <span className="text-sm text-white">Javascript XML, Tailwind CSS, C++</span>
        </motion.div>
      </div>
    </div>
    </>         
  )
}

export default About