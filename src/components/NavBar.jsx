import { useState } from 'react'
import { motion } from 'framer-motion'

function NavBar() {

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/20 backdrop-blur-md rounded-full px-8 h-12 flex items-center justify-between gap-12 shadow-sm border border-gray-200"
        initial = {{ opacity : 0, y:20 }}
        animate = {{ opacity: 1, y: 0}}
        transition = {{ duration : 0.6, delay:0.1 }}
      >
        <span className="font-medium text-base text-white">Kent Shimomura</span>
        <div className="flex gap-6">
          <a href="#about" className="text-sm text-white hover:text-amber-400 transition-colors">About</a>
          <a href="#work" className="text-sm text-white hover:text-amber-400 transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-white hover:text-amber-400 transition-colors">Contact</a>
        </div>
      </motion.nav>
    </>
  )
}

export default NavBar