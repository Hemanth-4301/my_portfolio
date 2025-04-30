import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false)
  
  const copyEmail = () => {
    navigator.clipboard.writeText('hemanthachar526@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-700 to-dark-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-center mx-auto">Get in Touch</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Open to collaborations or chats! Feel free to reach out if you have any questions or want to connect.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-poppins font-semibold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-8">
              Whether you have a question, project idea, or just want to say hello, I'd love to hear from you.
            </p>
            
            <div className="flex flex-col space-y-6">
              <a 
                href="mailto:hemanthachar526@gmail.com" 
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-600 mr-4">
                  <FaEnvelope />
                </div>
                <span>hemanthachar526@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/Hemanth-4301" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-600 mr-4">
                  <FaGithub />
                </div>
                <span>Hemanth-4301</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/hemanth-kumar-74b939215" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-600 mr-4">
                  <FaLinkedin />
                </div>
                <span>Hemanth Kumar R</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <div className="bg-dark-600 rounded-lg p-8 border border-dark-400">
              <h3 className="text-xl font-poppins font-semibold text-white mb-6 text-center">
                Send Me a Message
              </h3>
              
              <a 
                href="mailto:hemanthachar526@gmail.com" 
                className="btn-primary flex items-center justify-center w-full mb-4"
              >
                <FaEnvelope className="mr-2" /> 
                Email Me
              </a>
              
              <button 
                onClick={copyEmail}
                className="btn-outline flex items-center justify-center w-full"
              >
                {emailCopied ? "Email Copied!" : "Copy Email Address"}
                {!emailCopied && <FaArrowRight className="ml-2" />}
              </button>
              
              <div className="mt-8 text-center text-gray-400">
                <p>Looking forward to hearing from you!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact