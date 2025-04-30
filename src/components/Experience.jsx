import { motion } from 'framer-motion'
import { experienceData } from '../data/data'

const Experience = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-dark-700">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mx-auto">Experience</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            My roles, responsibilities and contributions
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-700 to-accent-500"></div>
              )}
              
              {/* Timeline circle */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-accent-600 bg-dark-700 transform -translate-x-1/2"></div>
              
              <div className="bg-dark-600 rounded-lg p-6 shadow-md border border-dark-500 hover:border-accent-700 transition-all duration-300">
                <div className="flex justify-between flex-wrap mb-2">
                  <h3 className="text-xl font-poppins font-semibold text-white mb-1">
                    {item.role}
                  </h3>
                  <span className="text-accent-400 font-medium">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-gray-300 font-medium mb-4">
                  {item.organization}
                </h4>
                <ul className="text-gray-400 space-y-2">
                  {item.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex">
                      <span className="mr-2 text-accent-500">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience