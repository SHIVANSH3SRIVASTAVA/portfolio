import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl text-blue-500">
            Shivansh.dev
          </h1>
          <div className="space-x-6 text-gray-300">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#certificates" className="hover:text-white">Certificates</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center px-6 h-screen">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Shivansh Srivastava</span>
        </h1>

        <h2 className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium">
          <Typewriter
            words={[
              "Software Developer",
              "Machine Learning Enthusiast",
              "Full Stack Learner",
              "Problem Solver"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
          B.Tech CSE student passionate about building scalable systems,
          intelligent applications and impactful digital experiences.
        </p>

        {/* SOCIAL LINKS */}
        <div className="flex gap-6 mt-8 text-2xl text-gray-400">
          <a href="https://github.com/SHIVANSH3SRIVASTAVA" target="_blank">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/shivansh3srivastava" target="_blank">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com/shivanshsrivastavaks" target="_blank">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md">
            <h3 className="font-semibold text-xl mb-3">Frontend</h3>
            <p className="text-gray-400">HTML, CSS, JavaScript, React, Tailwind</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md">
            <h3 className="font-semibold text-xl mb-3">Backend</h3>
            <p className="text-gray-400">Python, Flask, Node.js, APIs</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-md">
            <h3 className="font-semibold text-xl mb-3">Tools</h3>
            <p className="text-gray-400">Git, GitHub, Linux, Streamlit</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
            <p className="text-gray-400 text-sm">
              Issued by Coursera / Udemy / NPTEL
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Data Structures</h3>
            <p className="text-gray-400 text-sm">
              Issued by Coding Platform
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">
              Issued by Online Platform
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for internships, collaborations, or opportunities.
        </p>
        <a
          href="mailto:shivanshsrivastavaworks@gmail.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg"
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
