export default function AboutPage() {
  return (
    <div className="min-h-screen space-y-12">
      <div className="text-center space-y-4 py-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-xl text-gray-300">Get to know my story and journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Who Am I?</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate developer and designer with a love for creating beautiful,
            functional web experiences. With years of experience in web development,
            I've helped numerous clients bring their visions to life.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My expertise spans across modern web technologies including React, Next.js,
            TypeScript, and Tailwind CSS. I'm committed to writing clean, maintainable code
            and delivering exceptional results.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg text-center space-y-2">
            <h3 className="text-4xl font-bold">10+</h3>
            <p className="text-gray-200">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-lg text-center space-y-2">
            <h3 className="text-4xl font-bold">5+</h3>
            <p className="text-gray-200">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-8 rounded-lg text-center space-y-2">
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-gray-200">Happy Clients</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-lg text-center space-y-2">
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-gray-200">Dedication</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-12 rounded-lg space-y-6">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-blue-400 mb-3">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive Design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-purple-400 mb-3">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Node.js</li>
              <li>• API Development</li>
              <li>• Database Design</li>
              <li>• Authentication</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-pink-400 mb-3">Tools & Platforms</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Git & GitHub</li>
              <li>• Vercel Deployment</li>
              <li>• Docker</li>
              <li>• CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}