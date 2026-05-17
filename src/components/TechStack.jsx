import { motion } from 'framer-motion'
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiVite, SiFramer} from 'react-icons/si'
import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb"
import { SiPandas, SiStreamlit, SiQt} from "react-icons/si"

const techs = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiJavascript />, name: 'JavsScript', color: '#F7DF1E' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: '#38BDF8' },
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3Alt />, name: 'CSS3', color: '#1572B6' },
    { icon: <SiFramer />, name: 'Framer', color: '#FF0055' },
    { icon: <SiVite />, name: 'Vite', color: '#646CFF'},
    { icon: <TbBrandCSharp />, name: 'C#', color: '#7355DD'},
    { icon: <TbBrandCpp />, name: 'C++', color: '#00599C' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <SiPandas />, name: 'pandas', color: '#150458' },
    { icon: <SiStreamlit />, name: 'Streamlit', color: '#FF4B4B' },
    { icon: <SiQt />, name: 'PyQt5', color: '#306998' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
]

const looped = [...techs, ...techs, ...techs, ...techs]

export default function TechStack() {
    return (
        <div className='relative z-10 py-20 overflow-hidden'>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium mb-8 text-center'>
                Tech Stack
            </p>
            <div className='relative w-full overflow-hidden py-50'>
                <div className='absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none' />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className='flex gap-16 w-max carousel'>
                    {looped.map((tech, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center gap-2 min-w-[64px]'
                        >
                            <div
                                className="text-5xl transition-transform duration-200 hover:scale-150"
                                style={{ color: tech.color }}
                            >
                                {tech.icon}
                            </div>
                            <span className='text-xs text-gray-500'>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 