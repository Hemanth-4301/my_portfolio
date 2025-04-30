import { motion } from 'framer-motion'
import { 
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaNodeJs, FaDatabase, FaServer, FaCode
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiExpress, SiFlask, SiMongodb, SiMysql, 
  SiC, SiCplusplus 
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "C/C++", icon: <div className="flex"><SiC className="text-blue-600" /><SiCplusplus className="text-blue-600" /></div> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-300" /> }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
      ]
    },
    {
      title: "Others",
      skills: [
        { name: "DSA", icon: <FaCode className="text-purple-400" /> },
        { name: "OOP", icon: <FaServer className="text-orange-400" /> },
        { name: "OS", icon: <FaDatabase className="text-red-400" /> },
        { name: "DBMS", icon: <FaDatabase className="text-blue-400" /> }
      ]
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
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mx-auto">Skills</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            My technical toolkit spanning various languages, frameworks, and technologies
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-dark-600 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-poppins font-semibold mb-4 text-primary-400">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center p-3 bg-dark-500 rounded-lg hover:bg-dark-400 transition-all duration-300"
                  >
                    <div className="mr-3 text-xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills