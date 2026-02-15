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
    AOS.init({ duration: 800 })
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const certificates = Array.from({ length: 13 }, (_, i) => ({
    title: `Certificate ${i + 1}`,
    description: "Certification description here"
  }))

  return (
    <div
      className={`${
        dark
          ? "bg-[#0B1120] text-gray-100"
          : "bg-gradient-to-br from-gray-100 to-white text-gray-900"
      } min-h-screen flex flex-col transition-all duration-500`}
    >

      {/* === DARK MODE GLOW === */}
      {dark && (
        <div className="absolute inset-0 -z-20">
          <div className="absolute top-[-250px] left-[-150px] w-[700px] h-[700px] bg-violet-600/25 rounded-full blur-[180px]" />
          <div className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[180px]" />
        </div>
      )}

      {dark && (
        <Particles
          init={particlesInit}
          className="absolute inset-0 -z-10"
          options={{
            background: { color: "transparent" },
            particles: {
              number: { value: 35 },
              size: { value: 2 },
              opacity: { value: 0.25 },
              move: { enable: true, speed: 0.4 },
            },
          }}
        />
      )}

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? dark
              ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
              : "backdrop-blur-xl bg-white/80 border-b border-gray-300"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div onClick={() => setExpandImage(true)} className="cursor-pointer">
            <img
              src="/profile.jpeg"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-400 hover:scale-110 transition"
              alt="profile"
            />
          </div>

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

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow">

        {/* ================= HERO ================= */}
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
          <div
            className={`backdrop-blur-3xl border rounded-3xl p-14 shadow-xl ${
              dark
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
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

            <div className="flex justify-center gap-8 mt-8 text-2xl">
              <a
                href="https://github.com/SHIVANSH3SRIVASTAVA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/shivansh3srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-block px-7 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div
              className={`border p-8 rounded-2xl shadow-lg hover:scale-105 transition ${
                dark
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-300"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">
                Movie Recommender
              </h3>
              <p className="opacity-70 mb-4">
                ML-based recommendation system deployed live.
              </p>
              <a
                href="https://movie-recommender-system-82fs.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-500"
              >
                Live Demo →
              </a>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATES ================= */}
        <section id="certificates" className="py-24 px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Certificates
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border shadow hover:scale-105 transition ${
                  dark
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-300"
                }`}
              >
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-70">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-24 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <a
            href="mailto:shivanshsrivastavaworks@gmail.com"
            className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg hover:scale-105 transition"
          >
            Send Email
          </a>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer
        className={`py-6 text-center ${
          dark ? "bg-black/40" : "bg-gray-200"
        }`}
      >
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Shivansh Srivastava. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
