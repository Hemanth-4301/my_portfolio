import { motion } from 'framer-motion'
import { educationData } from '../data/data'

const Education = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="education" className="section-padding bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mx-auto">Education</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700"></div>
              )}
              
              {/* Timeline circle */}
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-primary-500 bg-dark-800 transform -translate-x-1/2"></div>
              
              <div className="bg-dark-600 rounded-lg p-6 shadow-md border border-dark-500 hover:border-primary-700 transition-all duration-300">
                <div className="flex justify-between flex-wrap mb-2">
                  <h3 className="text-xl font-poppins font-semibold text-white mb-1">
                    {item.degree}
                  </h3>
                  <span className="text-primary-400 font-medium">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-gray-300 font-medium mb-2">
                  {item.institution}
                </h4>
                <p className="text-gray-400 mb-2">
                  {item.score}
                </p>
                {item.details && (
                  <ul className="list-disc list-inside text-gray-400 mt-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="ml-2">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education