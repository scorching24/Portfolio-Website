import { motion, useScroll, useTransform } from 'framer-motion'


function Contact({ scrollY }) {
  const contactX = useTransform(scrollY, [3000, 4800], [1500, 0])

  scrollY.on('change', (latest) => console.log('scrollY:', latest))

  return (
    <>
      <div id = "contact" className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-4xl font-bold text-white mb-2'
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='text-gray-400 text-sm mb-10'
        >
          Have an idea or want to just say hi? Shoot me a message!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='relative z-10 flex flex-col gap-4'
        >
          <div className='flex items-center gap-4 border border-gray-800 rounded-2xl px-6 py-4 bg-white/5 backdrop-blur-sm'>
            <span className='text-gray-400 text-sm w-24'>Email</span>
            <a href='mailto:kentosnider@gmail.com' className='text-white text-sm hover:text-blue-500 transition-colors'>
              kentosnider@gmail.com
            </a>
          </div>
          <div className='flex items-center gap-4 border border-gray-800 rounded-2xl px-6 py-4 bg-white/5 backdrop-blur-sm'>
            <span className='text-gray-400 text-sm w-24'>GitHub</span>
            <a href='https://github.com/scorching24/' target='_blank' className='text-white text-sm hover:text-blue-500 transition-colors'>
              github.com/scorching24
            </a>
          </div>
          <div className='flex items-center gap-4 border border-gray-800 rounded-2xl px-6 py-4 bg-white/5 backdrop-blur-sm'>
            <span className='text-gray-400 text-sm w-24'>Macondo</span>
            <a href='https://macondo.hackclub.com/u/c05a8b17-c4eb-4367-8f50-f1a48147558a' target='_blank' className='text-white text-sm hover:text-blue-500 transition-colors'>
              macondo.hackclub.com/u/...
            </a>
          </div>
        </motion.div>
      </div>

      <div className='relative z-10 w-full flex justify-center overflow-visible pb-32'>
        <motion.div style={{ x: contactX }}>
          <video
            src='src\assets\kAnimation.webm'
            className='w-96'
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>
      </div>
    </>
  )
}

export default Contact