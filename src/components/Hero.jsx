import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import my_img from "../assets/img2.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-dark-800 to-dark-700"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <div className="text-accent-500 mb-4 font-medium">Hi, I'm</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              <span className="text-white">Hemanth</span>
              <span className="text-primary-500"> Kumar R</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
              Full-Stack Developer | UI/UX Enthusiast
            </h2>
            <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
              A passionate developer with expertise in creating responsive web
              applications and user interfaces. I love solving complex problems
              and turning ideas into reality through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn-primary">View Projects</button>
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn-outline">Contact Me</button>
              </Link>
            </div>
            <div className="flex mt-8 space-x-5">
              <a
                href="https://github.com/Hemanth-4301"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemanth-kumar-74b939215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:hemanthachar526@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-5/12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-accent-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-dark-600 p-2 rounded-xl border border-dark-400">
                <div className="bg-dark-500 rounded-lg overflow-hidden w-full aspect-square">
                  <img
                    src={my_img}
                    alt="Hemanth Kumar R"
                    className="w-full h-full object-cover object-center brightness-90 hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
