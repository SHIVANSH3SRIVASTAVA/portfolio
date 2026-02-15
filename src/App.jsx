import { useState, useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import AOS from "aos"
import "aos/dist/aos.css"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function App() {

  const certificates = [
    { title: "Web Development", file: "/certificates/web.png" },
    { title: "Innomatics Hackathon", file: "/certificates/ss.png" },
    { title: "Prompt Engineering", file: "/certificates/prompt.png" },
    { title: "Open AI GPT-3", file: "/certificates/openai.png" },
    { title: "MakeX Internship", file: "/certificates/MakeX.png" },
    { title: "M4L Hackathon", file: "/certificates/m4l.png" },
    { title: "GPT Models", file: "/certificates/gpt_models.png" },
    { title: "GenAI Models", file: "/certificates/gen_models.png" },
    { title: "Code Clash Hackathon", file: "/certificates/code_clash_hackathon.png" },
    { title: "VBYLD Quiz", file: "/certificates/certificate.png" },
    { title: "Fundamentals Of AI", file: "/certificates/ai.png" },
    { title: "AI First Software Engineering", file: "/certificates/ai_se.png" },
  ]

  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [expandImage, setExpandImage] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const [activeCert, setActiveCert] = useState(
    Math.floor(certificates.length / 2)
  )

  const touchStartX = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000 })
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🔁 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCert(prev => (prev + 1) % certificates.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [certificates.length])

  // ⌨ Keyboard Navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight")
        setActiveCert(prev => (prev + 1) % certificates.length)
      if (e.key === "ArrowLeft")
        setActiveCert(prev =>
          prev === 0 ? certificates.length - 1 : prev - 1
        )
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [certificates.length])

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className={`${dark ? "bg-[#0B1120] text-gray-100" : "bg-gray-50 text-gray-900"} relative min-h-screen flex flex-col overflow-x-hidden transition-all duration-500`}>

      {/* Glow */}
      {dark && (
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-violet-600/25 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[160px]" />
        </div>
      )}

      {/* Particles */}
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

      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? dark
          ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
          : "backdrop-blur-xl bg-white/70 border-b border-gray-200"
        : "bg-transparent"
        }`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <div onClick={() => setExpandImage(true)} className="cursor-pointer">
            <img src="/profile.jpeg"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-400 hover:scale-110 transition" />
          </div>

          <div className="flex gap-8 items-center font-medium">
            <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
            <a href="#certificates" className="hover:text-violet-400 transition">Certificates</a>
            <a href="#contact" className="hover:text-violet-400 transition">Contact</a>

            <button onClick={() => setDark(!dark)} className="text-xl hover:scale-110 transition">
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
        <div className={`relative backdrop-blur-3xl ${dark ? "bg-white/5 border-white/10" : "bg-white/80 border-gray-200"} border rounded-3xl p-12 shadow-[0_0_60px_rgba(0,0,0,0.4)]`}>

          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Shivansh Srivastava
            </span>
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl opacity-80">
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
            <a href="https://github.com/SHIVANSH3SRIVASTAVA" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 hover:text-violet-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/shivansh3srivastava" target="_blank" rel="noopener noreferrer"
              className="hover:scale-110 hover:text-cyan-400 transition">
              <FaLinkedin />
            </a>
          </div>

          <a href="/resume.pdf" download
            className="mt-8 inline-block px-7 py-3 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            Download Resume
          </a>
        </div>
      </section>

      {/* CERTIFICATES CAROUSEL */}
      <section id="certificates" className="py-24 px-6 text-center overflow-hidden">
        <h2 className="text-4xl font-bold mb-16">Certificates</h2>

        <div
          className="relative h-[380px] flex items-center justify-center perspective-[1400px]"
          onTouchStart={(e) => touchStartX.current = e.touches[0].clientX}
          onTouchEnd={(e) => {
            const diff = e.changedTouches[0].clientX - touchStartX.current
            if (diff > 50)
              setActiveCert(prev => prev === 0 ? certificates.length - 1 : prev - 1)
            if (diff < -50)
              setActiveCert(prev => (prev + 1) % certificates.length)
          }}
        >

          {certificates.map((cert, index) => {

            const total = certificates.length
            let offset = index - activeCert

            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total

            const absOffset = Math.abs(offset)

            const scale = 1 - absOffset * 0.12
            const opacity = 1 - absOffset * 0.2
            const blur = absOffset * 1

            const horizontal = offset * 220
            const vertical = absOffset * 18

            return (
              <div
                key={index}
                onClick={() => setActiveCert(index)}
                className="absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] cursor-pointer"
                style={{
                  transform: `
                    translateX(${horizontal}px)
                    translateY(${vertical}px)
                    scale(${scale})
                    rotateY(${offset * -8}deg)
                  `,
                  zIndex: 100 - absOffset,
                  opacity: opacity,
                  filter: `blur(${blur}px)`
                }}
              >
                <div
                  onDoubleClick={() => setSelectedCert(cert.file)}
                  className={`rounded-xl overflow-hidden border ${dark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"} shadow-2xl`}
                >
                  <img
                    src={cert.file}
                    alt={cert.title}
                    className="w-[320px] h-[220px] object-cover"
                  />
                </div>
                <p className="mt-3 font-medium">{cert.title}</p>
              </div>
            )
          })}

        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}>
          <img src={selectedCert}
            className="max-h-[90vh] max-w-full rounded-xl shadow-2xl" />
        </div>
      )}

      {/* FOOTER */}
      <footer className={`mt-auto py-6 text-center ${dark ? "bg-black/30" : "bg-gray-200"}`}>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Shivansh Srivastava. All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
