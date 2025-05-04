import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-dark-700">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="text-4xl font-poppins font-bold text-primary-500"
        >
          H
        </motion.div>
      </div>
    );
  }

  return (
    <div className="custom-scrollbar">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
