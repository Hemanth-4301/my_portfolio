import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { projectsData } from '../data/data'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-dark-700">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mx-auto">Projects</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my skills and problem-solving abilities
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="project-card"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-poppins font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => openModal(project)}
                    className="btn-outline text-sm px-4 py-2"
                  >
                    Read More
                  </button>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-600 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-poppins font-semibold text-white">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="text-lg font-medium text-primary-400 mb-2">Problem:</h4>
                  <p>{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary-400 mb-2">Solution:</h4>
                  <p>{selectedProject.solution}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary-400 mb-2">Impact:</h4>
                  <p>{selectedProject.impact}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary-400 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="skill-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-t border-dark-400">
                  <div className="flex space-x-4">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-outline text-sm px-4 py-2 flex items-center"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    )}
                    {selectedProject.liveDemo && (
                      <a 
                        href={selectedProject.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary text-sm px-4 py-2 flex items-center"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white px-4 py-2 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Projects