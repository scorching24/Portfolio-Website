import ProjectCard from "./ProjectCard";
import typingSimImg from "../assets/typing-sim.png"
import geodleImg from "../assets/geodle.png"
import dashboardImg from "../assets/dashboard.png"
import { motion } from 'framer-motion'

const projects = [
    {
        image:typingSimImg,
        title: 'Typing Simulator',
        description: 'Typing simulator with sfx, upgrades, and multiplier + combo systems, using the Pygame library in Python.'
    },
    {
        image:geodleImg,
        title: 'Geodle',
        description: 'Human Development Index and Gender Inequality Index guessing game designed for an AP Human Geography project created with Streamlit and the pandas library in Python.'
    },
    {
        image:dashboardImg,
        title: 'Widget Dashboard',
        description: 'Customizable widget dashboard including games, a system digital clock, voice recognition capable of opening applications, and more using PyQt5.'
    }
]

export default function Projects() {
    return(
        <div id = "work" className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-20">
            <motion.h2
                className='text-4xl font-bold text-white m-8'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >Featured Projects</motion.h2>
            <div className='flex flex-col gap-12'>
                {projects.map((project) => (
                    <ProjectCard
                    key={project.title}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    />
                ))}
            </div>
        </div>
    )
}