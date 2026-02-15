import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-x-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed w-full backdrop-blur-xl bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-3">
            <img
              src="/profile.jpg"
              alt="Shivansh"
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/70 ring-offset-2 ring-offset-gray-950 hover:scale-105 transition duration-300"
            />
            <span className="hidden md:block font-semibold text-lg tracking-wide">
              Shivansh Srivastava
            </span>
          </div>

          <div className="space-x-6 text-gray-300 font-medium">
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certificates" className="hover:text-white transition">Certificates</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex items-center justify-center min-h-screen px-6 pt-20">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 text-center max-w-4xl shadow-2xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shivansh Srivastava
            </span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium">
            <Typewriter
              words={[
                "Software Developer",
                "Machine Learning Enthusiast",
                "Full Stack Learner",
                "Problem Solver"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            B.Tech CSE student passionate about building scalable software
            systems, intelligent applications, and impactful digital experiences.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 mt-8 text-2xl text-gray-400">
            <a href="https://github.com/YOUR_GITHUB" target="_blank">
              <FaGithub className="hover:text-white transition duration-300" />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
              <FaLinkedin className="hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank">
              <FaInstagram className="hover:text-pink-400 transition duration-300" />
            </a>
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Frontend",
              content: "HTML, CSS, JavaScript, React, Tailwind CSS"
            },
            {
              title: "Backend",
              content: "Python, Flask, Node.js, REST APIs"
            },
            {
              title: "Tools",
              content: "Git, GitHub, Linux, Streamlit"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.content}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            "Machine Learning Certification",
            "Data Structures & Algorithms",
            "Web Development Certification"
          ].map((cert, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl hover:scale-105 transition duration-300 shadow-xl"
            >
              <h3 className="font-semibold text-lg">{cert}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Issued by recognized platform
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-8">
          Open to internships, collaborations and exciting opportunities.
        </p>

        <a
          href="mailto:yourmail@gmail.com"
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition shadow-lg"
        >
          Send Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-white/10 text-gray-500">
        © 2026 Shivansh Srivastava. All rights reserved.
      </footer>

    </div>
  )
}

export default App
