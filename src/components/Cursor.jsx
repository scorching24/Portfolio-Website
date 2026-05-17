import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Cursor() {
    const [position, setPosition] = useState({ x:0, y: 0})
    const [hovering, setHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, nav')) {
                setHovering(true)
            }
        }

        const handleMouseOut = (e) => {
            if (e.target.closest('a, button, nav')) {
                setHovering(false)
        }
    }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])
    

    return(
        <motion.div
        className='fixed top-0 left-0 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_4px_rgba(251,191,36,0.6)]'
        animate = {{
            x: position.x - (hovering ? 24 : 8),
            y: position.y - (hovering ? 24: 8),
            width: hovering ? 48 : 16,
            height: hovering ? 48: 16,
            backgroundColor: hovering ? 'rgba(255,255,255,0.15)' : 'rgba(96,165,250,1)',
            border: hovering ? '1px solid rgba(255,255,255,0.4)' : '0px solid transparent',
        }}
        transition={{ type: 'tween', duration: 0.15 }}
            
        />
    )
}

export default Cursor