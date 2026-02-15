import { Typewriter } from "react-simple-typewriter"

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen relative overflow-x-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Shivansh.dev
          </h1>

          <div className="space-x-8 hidden md:flex text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center px-6 h-screen pt-24">

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl px-12 py-16 shadow-2xl max-w-4xl">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">
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
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            B.Tech CSE student passionate about building scalable
            software systems and intelligent applications.
          </p>

          <div className="mt-10 flex gap-6 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-xl font-medium shadow-lg shadow-blue-600/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 hover:border-blue-400 transition duration-300 rounded-xl font-medium"
            >
              Contact Me
            </a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am a Computer Science undergraduate with strong interest in
            software engineering, machine learning, and full-stack development.
            I enjoy solving real-world problems and continuously improving my
            technical skills by building impactful projects.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-lg">
            {["C++", "Python", "JavaScript", "React", "Machine Learning", "SQL", "Git", "Linux"].map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-xl py-6 hover:border-blue-400 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-400 transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">
                Movie Recommender System
              </h3>

              <p className="text-gray-400 mb-6">
                Content-based movie recommendation system built using
                Python, Scikit-learn, and Streamlit with TMDB API integration.
              </p>

              <div className="flex gap-4 justify-center">
                <a
                  href="https://movie-recommender-system-ss.streamlit.app/"
                  target="_blank"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/SHIVANSH3SRIVASTAVA/movie-recommender-system"
                  target="_blank"
                  className="px-5 py-2 border border-white/20 hover:border-blue-400 rounded-lg transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-400 transition transform hover:-translate-y-2">
              <h3 className="text-2xl font-semibold mb-4">
                Developer Portfolio
              </h3>

              <p className="text-gray-400 mb-6">
                Modern responsive portfolio built using React and Tailwind CSS
                featuring glassmorphism UI design.
              </p>

              <div className="flex gap-4 justify-center">
                <a
                  href="#"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="px-5 py-2 border border-white/20 hover:border-blue-400 rounded-lg transition"
                >
                  GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">
            Contact
          </h2>

          <p className="text-gray-400 text-lg">
            Email: your-email@example.com
          </p>
        </div>
      </section>

    </div>
  )
}

export default App
