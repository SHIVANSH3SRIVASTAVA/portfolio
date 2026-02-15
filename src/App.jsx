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
    <div className={`${
      dark
        ? "bg-[#0B1120] text-gray-100"
        : "bg-gray-50 text-gray-900"
    } relative min-h-screen flex flex-col overflow-x-hidden transition-all duration-500`}>

      {/* === BACKGROUND GLOW === */}
      {dark && (
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-[-250px] left-[-150px] w-[700px] h-[700px] bg-violet-600/25 rounded-full blur-[180px]" />
          <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[180px]" />
        </div>
      )}

      {/* === PARTICLES (ONLY DARK MODE) === */}
      {dark && (
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
      )}

      {/* ================= NAVBAR ================= */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
            : "backdrop-blur-xl bg-white/70 border-b border-gray-200"
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
              className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-400 hover:scale-110 transition"
              alt="profile"
            />
          </div>

          {/* Menu */}
          <div className="flex gap-8 items-center font-medium">
            <a href="#projects" className="hover:text-violet-400 transition">
              Projects
            </a>
            <a href="#certificates" className="hover:text-violet-400 transition">
              Certificates
            </a>
            <a href="#contact" className="hover:text-violet-400 transition">
              Contact
            </a>

            <button
              onClick={() => setDark(!dark)}
              className="text-xl hover:scale-110 transition"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= PROFILE MODAL ================= */}
      {expandImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setExpandImage(false)}
        >
          <img
            src="/profile.jpeg"
            className="w-80 h-80 rounded-full object-cover border-4 border-violet-400 shadow-2xl"
            alt="expanded"
          />
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">

        <div className={`relative backdrop-blur-3xl ${
          dark ? "bg-white/5 border-white/10" : "bg-white/80 border-gray-200"
        } border rounded-3xl p-14 shadow-[0_0_60px_rgba(0,0,0,0.4)]`}>

          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Shivansh Srivastava
            </span>
          </h1>

          <h2 className="mt-6 text-2xl opacity-80">
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
              className="hover:scale-110 hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/shivansh3srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-block px-7 py-3 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Download Resume
          </a>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className={`backdrop-blur-xl ${
            dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
          } border p-8 rounded-2xl shadow-xl hover:scale-105 transition`}>

            <h3 className="text-xl font-semibold mb-4">
              Movie Recommender
            </h3>

            <p className="opacity-70 mb-4">
              ML-based recommendation system deployed live.
            </p>

            <a
              href="https://movie-recommender-system-ss.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section id="certificates" className="py-24 px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-16">Certificates</h2>
        <p className="opacity-70">Add your certificates here.</p>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>

        <a
          href="mailto:shivanshsrivastavaworks@gmail.com"
          className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg hover:scale-105 transition"
        >
          Send Email
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className={`mt-auto py-6 text-center ${
        dark ? "bg-black/30" : "bg-gray-200"
      }`}>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Shivansh Srivastava. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
