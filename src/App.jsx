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
    AOS.init({ duration: 900, once: true })

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
    <div
      className={`scroll-smooth ${
        dark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      } relative min-h-screen overflow-x-hidden transition-all duration-500`}
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[160px]" />
      </div>

      {/* ================= PARTICLES ================= */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 45 },
            size: { value: 3 },
            opacity: { value: 0.3 },
            move: { enable: true, speed: 0.4 },
          },
        }}
      />

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Profile + Name */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setExpandImage(true)}
          >
            <img
              src="/profile.jpeg"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 hover:scale-110 transition"
            />
            <span className="hidden md:block font-semibold tracking-wide">
              Shivansh Srivastava
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8 items-center font-medium tracking-wide">
            {["skills", "projects", "certificates", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="relative group capitalize"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
              )
            )}

            <button onClick={() => setDark(!dark)}>
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
            className="w-72 h-72 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
          />
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
        <div
          data-aos="fade-up"
          className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >
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
                "Problem Solver",
              ]}
              loop
              cursor
            />
          </h2>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-8 text-2xl">
            <a
              href="https://github.com/SHIVANSHSRIVASTAVA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:scale-110 hover:bg-white/20 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/shivansh3srivastava"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:scale-110 hover:bg-blue-500/20 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="py-24 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Movie Recommender
            </h3>
            <p className="text-gray-400 mb-4">
              ML-based recommendation system deployed live.
            </p>
            <a
              href="https://movie-recommender-system-ss.streamlit.app/"
              target="_blank"
              className="text-blue-400"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section
        id="certificates"
        className="py-24 px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Certificates
        </h2>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-24 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <a
          href="mailto:yourmail@gmail.com"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </section>
    </div>
  )
}

export default App
