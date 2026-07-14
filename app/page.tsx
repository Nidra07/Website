export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="space-y-16">
        <section className="text-center space-y-6 py-20">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto">
            Discover my projects, services, and professional journey
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">About Me</h3>
            <p className="text-gray-300">Learn more about my background and experience</p>
            <a href="/about" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
              Read More →
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p className="text-gray-300">Check out my latest work and portfolio pieces</p>
            <a href="/projects" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
              View Projects →
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Services</h3>
            <p className="text-gray-300">Explore the services I offer to clients</p>
            <a href="/service" className="text-pink-400 hover:text-pink-300 mt-4 inline-block">
              Learn More →
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
            <h3 className="text-xl font-bold mb-2">Resume</h3>
            <p className="text-gray-300">View my professional experience and skills</p>
            <a href="/resume" className="text-green-400 hover:text-green-300 mt-4 inline-block">
              Download →
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-12 text-center space-y-4">
          <h2 className="text-4xl font-bold">Ready to Start a Project?</h2>
          <p className="text-xl text-gray-300">
            Get in touch and let's create something amazing together
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all"
          >
            Contact Me Now
          </a>
        </section>
      </div>
    </div>
  );
}