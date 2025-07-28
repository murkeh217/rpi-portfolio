const Skills = () => {
const skillCategories = [
  {
    title: "Game Development",
    skills: [
      { name: "Unity3D", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Game Prototyping", level: 85 },
      { name: "Mobile Optimization", level: 70 },
      { name: "Physics Systems", level: 75 },
      { name: "Shader Programming", level: 60 }
    ]
  },
  {
    title: "Software Development Tools",
    skills: [
      { name: "HTML/CSS", level: 70 },
      { name: "NodeJS", level: 50 },
      { name: "JIRA", level: 60 },
      { name: "Blender", level: 30 },
      { name: "3D Modeling", level: 40 },
      { name: "UI/UX Design", level: 65 }
    ]
  }];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Technical Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-blue-600 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Always Learning</h3>
              <p className="text-lg mb-6 text-gray-800">
                Game development is constantly evolving, and I&apos;m committed to staying current with new technologies and techniques.
                Currently exploring VR/AR development, advanced shader programming, and multiplayer networking.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium text-gray-800">
                  VR/AR Development
                </span>
                <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium text-gray-800">
                  Advanced Shaders
                </span>
                <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium text-gray-800">
                  Multiplayer Networking
                </span>
                <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium text-gray-800">
                  AI Integration
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Game Development</h3>
              <p className="text-gray-600">
                Creating engaging gameplay experiences, implementing game mechanics, and optimizing for various platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Testing gameplay mechanics, bug reporting, and ensuring game quality through systematic QA processes.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-purple-100 rounded-full mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative & Design</h3>
              <p className="text-gray-600">
                3D modeling, asset creation, and UI/UX design for creating visually appealing game experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
