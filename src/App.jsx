import { useState, useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import AOS from "aos"
import "aos/dist/aos.css"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import gsap from "gsap"

function App() {
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [expandImage, setExpandImage] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const heroRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 900, once: true })

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power4.out",
    })

    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className={`scroll-smooth ${dark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"} relative min-h-screen overflow-x-hidden transition-all duration-500`}>

      {/* ======= BACKGROUND GLOW ======= */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-[-150px] left-[-100px] w-[700px] h-[700px] bg-blue-600/30 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-purple-600/30 rounded-full blur-[200px]" />
      </div>

      {/* ======= PARTICLES ======= */}
      <Particles
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { enable: true, speed: 0.4 },
            opacity: { value: 0.3 },
          },
        }}
      />

      {/* ======= NAVBAR ======= */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-black/40 shadow-xl" : ""}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          {/* Profile */}
          <div onClick={() => setExpandImage(true)} className="flex items-center gap-3 cursor-pointer">
            <img
              src="/profile.jpeg"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 hover:scale-110 transition"
            />
            <span className="hidden md:block font-semibold">Shivansh Srivastava</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            {["skills", "projects", "certificates", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="relative group capitalize">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <button onClick={() => setDark(!dark)}>
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-black/70 p-6 space-y-4">
            {["skills", "projects", "certificates", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="block capitalize">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ======= PROFILE MODAL ======= */}
      {expandImage && (
        <div onClick={() => setExpandImage(false)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <img src="/profile.jpeg" className="w-80 h-80 rounded-full border-4 border-blue-500 shadow-2xl" />
        </div>
      )}

      {/* ======= HERO ======= */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
        <div
          ref={heroRef}
          className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-[spin_6s_linear_infinite]"
          style={{ backgroundSize: "300% 300%" }}
        >
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
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

            <div className="flex justify-center gap-8 mt-8 text-2xl">
              <a href="https://github.com/SHIVANSHSRIVASTAVA" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/shivansh3srivastava" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 hover:scale-110 transition">
                <FaLinkedin />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ======= PROJECTS (STAGGER ANIMATION) ======= */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Movie Recommender", "Portfolio Website", "ML Project"].map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{project}</h3>
              <p className="text-gray-400 mb-4">
                Description of {project}.
              </p>
              <a href="#" className="text-blue-400">Live Demo →</a>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default App
