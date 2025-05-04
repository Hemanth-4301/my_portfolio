import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="bg-primary-600 text-white p-3 rounded-full mb-8 hover:bg-primary-700 transition-colors duration-300 cursor-pointer"
          >
            <FaArrowUp />
          </Link>

          <div className="text-2xl font-poppins font-bold mb-4">
            <span className="text-primary-500">H</span>emanth
          </div>

          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/Hemanth-4301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-kumar-74b939215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:hemanthachar526@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 mb-6">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              Education
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hemanth Kumar R. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
