import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import AOS from "aos"
import "aos/dist/aos.css"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function App() {
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [expandImage, setExpandImage] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className={`${dark ? "bg-gray-950 text-white" : "bg-white text-black"} relative min-h-screen overflow-x-hidden transition-all duration-500`}>

      {/* === SOFT GLOW BACKGROUND === */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-200px] left-[-150px] w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[200px]" />
      </div>

      {/* === PARTICLES === */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            opacity: { value: 0.3 },
            move: { enable: true, speed: 0.5 },
          },
        }}
      />

      {/* === NAVBAR === */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 shadow-xl border-b border-white/10"
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          {/* Profile */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setExpandImage(true)}
          >
            <img
              src="/profile.jpeg"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-400 hover:scale-110 transition"
            />
            <span className="hidden md:block font-semibold tracking-wide">
              Shivansh Srivastava
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#certificates" className="hover:text-indigo-400 transition">Certificates</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>

            <button onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/60 border-t border-white/10 p-6 space-y-4">
            <a href="#projects" className="block">Projects</a>
            <a href="#certificates" className="block">Certificates</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </nav>

      {/* === PROFILE MODAL === */}
      {expandImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setExpandImage(false)}
        >
          <img
            src="/profile.jpeg"
            className="w-80 h-80 rounded-full object-cover border-4 border-indigo-400 shadow-2xl"
          />
        </div>
      )}

      {/* === HERO === */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">

        <div className="backdrop-blur-3xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-[0_0_40px_rgba(0,0,0,0.4)]">

          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Shivansh Srivastava
            </span>
          </h1>

          <h2 className="mt-6 text-2xl text-gray-300">
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

          {/* Social Links */}
          <div className="flex justify-center gap-8 mt-8 text-2xl">
            <a
              href="https://github.com/SHIVANSHSRIVASTAVA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/shivansh3srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* === PROJECTS === */}
      <section id="projects" className="py-24 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">Movie Recommender</h3>
            <p className="text-gray-400 mb-4">
              ML-based recommendation system deployed live.
            </p>
            <a
              href="https://movie-recommender-system-ss.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </section>

      {/* === CERTIFICATES === */}
      <section id="certificates" className="py-24 px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-16">Certificates</h2>
        <p className="text-gray-400">Add your certificates here.</p>
      </section>

      {/* === CONTACT === */}
      <section id="contact" className="py-24 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <a
          href="mailto:yourmail@gmail.com"
          className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition"
        >
          Send Email
        </a>
      </section>

    </div>
  )
}

export default App
