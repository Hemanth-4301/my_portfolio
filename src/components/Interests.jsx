import { motion } from 'framer-motion'
import { FaPaintBrush, FaGamepad, FaChessKnight, FaTable } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'

const Interests = () => {
  const interests = [
    {
      title: "UI/UX Design",
      icon: <MdDesignServices className="text-3xl text-primary-400" />,
      description: "Passionate about creating intuitive and visually appealing user interfaces."
    },
    {
      title: "Drawing",
      icon: <FaPaintBrush className="text-3xl text-accent-500" />,
      description: "Enjoy expressing creativity through various artistic mediums."
    },
    {
      title: "Badminton",
      icon: <FaTable className="text-3xl text-yellow-500" />,
      description: "Enthusiastic player who enjoys both casual games and competitive matches."
    },
    {
      title: "Table Tennis",
      icon: <FaTable className="text-3xl text-green-500" />,
      description: "Love playing table tennis to unwind and sharpen reflexes."
    },
    {
      title: "Chess",
      icon: <FaChessKnight className="text-3xl text-blue-400" />,
      description: "Enjoy the strategic depth and mental challenge of chess."
    },
    {
      title: "Gaming",
      icon: <FaGamepad className="text-3xl text-red-400" />,
      description: "Fan of strategy and adventure games that challenge problem-solving skills."
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="interests" className="section-padding bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mx-auto">Interests</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Beyond coding, here are some things I'm passionate about
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {interests.map((interest, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-dark-600 rounded-lg p-6 shadow-md border border-dark-500 hover:border-primary-700 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-dark-700">
                  {interest.icon}
                </div>
                <h3 className="text-lg font-poppins font-semibold text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-400">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Interests