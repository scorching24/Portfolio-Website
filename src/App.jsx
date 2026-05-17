import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectCard from './components/ProjectCard.jsx'
import NavBar from './components/NavBar.jsx'
import Description from './components/Description.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Cursor from './components/Cursor.jsx'
import TechStack from './components/TechStack.jsx'

function App() {
  const { scrollY } = useScroll()
 
  const topRightY = useTransform(scrollY, [0, 3000], [0, -450])

  const bottomLeftY = useTransform(scrollY, [0, 3000], [0, 450])

  const normalK = useTransform(scrollY, [1750, 2200], [400, 0])
  return (
    <>
      <div className='bg-black min-h-screen overflow-x-hidden'>
        <Cursor />
        <motion.div
          className='fixed top-6 left-16 z-20'
          initial = {{ opacity : 0, y:20 }}
          animate = {{ opacity: 1, y: 0}}
          transition = {{ duration : 0.6, delay:0.1 }}
          >
          <a href="#">
            <img src='src\assets\kLogo.webp' className="w-10 h-10" alt ="KS" />
          </a>
        </motion.div>
        <motion.div
          className='fixed -top-40 -right-40 z-0'
          style = {{ y: topRightY}}>
          <video
              src='src\assets\kAnimation.webm'
              className='w-160 rotate-210'
              autoPlay
              loop
              muted
              playsInline
            />
        </motion.div>
        <motion.div
          className='fixed -bottom-40 -left-40 z-0'
          style = {{ y: bottomLeftY}}
          >
          <video
            src='src\assets\kAnimation.webm'
            className='w-160 rotate-420'
            autoPlay
            loop
            muted
            playsInline
            />
        </motion.div>
        
        <NavBar/>
        <div className='pt-100 relative z-10'>
          <Description/>
          <About/>
          <TechStack/>
          <Project/>
          <Contact scrollY={scrollY} />
          <footer className='px-6 pb-10 pt-30'>
            <h1 className='text-[12rem] font-bold text-white/5 leading-none select-none'>
            SHIMOMURA
            </h1>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App