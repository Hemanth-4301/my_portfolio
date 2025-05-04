import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300  overflow-hidden ${
        scrolled
          ? "bg-dark-800/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-poppins font-bold"
        >
          H<span className="text-primary-500">K</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-gray-300 hover:text-primary-500 transition-colors duration-100 cursor-pointer"
            >
              <Link
                to={link.to}
                smooth={true}
                offset={-70}
                spy={true}
                duration={100}
                activeClass="text-primary-500 font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ rotate: 360 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-xl"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-700 shadow-lg"
        >
          <ul className="py-4 px-6 space-y-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="text-gray-300 hover:text-primary-500 transition-colors duration-300"
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-primary-500 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
