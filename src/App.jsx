import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import AOS from "aos"
import "aos/dist/aos.css"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function App() {

  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [expandImage, setExpandImage] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className={`${dark ? "bg-gray-950 text-white" : "bg-white text-black"} relative min-h-screen transition-colors duration-500`}>

      {/* PARTICLES BACKGROUND */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
          }
        }}
      />

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-black/40 shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setExpandImage(true)}>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 hover:scale-110 transition"
            />
            <span className="hidden md:block font-semibold">
              Shivansh Srivastava
            </span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>

            {/* DARK MODE TOGGLE */}
            <button onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

        </div>
      </nav>

      {/* EXPANDED PROFILE MODAL */}
      {expandImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setExpandImage(false)}
        >
          <img
            src="/profile.jpg"
            className="w-64 h-64 rounded-full object-cover border-4 border-blue-500"
          />
        </div>
      )}

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">

        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Shivansh Srivastava
          </span>
        </h1>

        <h2 className="mt-6 text-2xl">
          <Typewriter
            words={[
              "Software Developer",
              "Machine Learning Enthusiast",
              "Full Stack Learner",
              "Problem Solver"
            ]}
            loop
            cursor
          />
        </h2>

        <div className="flex gap-6 mt-8 text-2xl">
          <a href="https://github.com/YOUR_GITHUB" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank"><FaLinkedin /></a>
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank"><FaInstagram /></a>
        </div>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          download
          className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Download Resume
        </a>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-gray-900" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md">
            <h3 className="font-semibold text-xl mb-3">Movie Recommender</h3>
            <p className="text-gray-400 mb-4">Content-based recommendation system using ML.</p>
            <a href="https://movie-recommender-system-ss.streamlit.app/" target="_blank" className="text-blue-400">
              Live Demo →
            </a>
          </div>

        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <a href="mailto:yourmail@gmail.com" className="px-6 py-3 bg-blue-600 rounded-lg">
          Send Email
        </a>
      </section>

      <footer className="text-center py-6 border-t border-white/10">
        © 2026 Shivansh Srivastava
      </footer>

    </div>
  )
}

export default App
