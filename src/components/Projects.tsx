const Projects = () => {
const projects = [
    {
      id: 1,
      title: "Fingers Crossed",
      description: "Implemented a branching dialogue system using ScriptableObjects for modular story paths, persistent decision tracking, and multiple endings.",
      image: "🤞",
      technologies: ["Unity", "C#", "ScriptableObjects"],
      github: "https://murkeh217.github.io/fingers_crossed",
      demo: "https://murkeh217.github.io/fingers_crossed"
    },
    {
      id: 2,
      title: "Hurdle Runner",
      description: "Developed a fast-paced 2D runner using Rigidbody2D physics, precision-based jump timing, and obstacle collision detection.",
      image: "🏃",
      technologies: ["Unity", "Rigidbody2D", "C#"],
      github: "https://murkeh217.github.io/hurdle-race",
      demo: "https://murkeh217.github.io/hurdle-race"
    },
    {
      id: 3,
      title: "JOJO Arrow",
      description: "Built a rhythm input system using beat mapping, integrated Unity Timeline for feedback animations, and dynamic difficulty scaling.",
      image: "🎯",
      technologies: ["Unity", "C#", "Unity Timeline"],
      github: "https://murkeh217.github.io/jojo_arrow",
      demo: "https://murkeh217.github.io/jojo_arrow"
    },
    {
      id: 4,
      title: "Bass Rhythm",
      description: "Core gameplay loop built around BPM-based audio event triggers with custom timing input system for real-time beat synchronization.",
      image: "🎵",
      technologies: ["Unity", "C#", "AudioSource"],
      github: "https://murkeh217.github.io/bass_rhythm",
      demo: "https://murkeh217.github.io/bass_rhythm"
    },
    {
      id: 5,
      title: "Killer Wave",
      description: "Procedural wave terrain generation, single-tap control, and post-processing effects for a neon synthwave aesthetic.",
      image: "🌊",
      technologies: ["Unity", "C#", "URP"],
      github: "https://murkeh217.github.io/Killer-Wave",
      demo: "https://murkeh217.github.io/Killer-Wave"
    },
    {
      id: 6,
      title: "JOJO Fight",
      description: "2.5D fighting engine with directional hitboxes, buffered combo inputs, and super meter system with cinematic camera triggers.",
      image: "🥊",
      technologies: ["Unity", "C#", "Mecanim Animator"],
      github: "https://murkeh217.github.io/2.5D-Fighting-Game",
      demo: "https://murkeh217.github.io/2.5D-Fighting-Game"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            My Recent Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of the projects I&apos;ve worked on recently. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500 mb-8">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a
            href="https://github.com/murkeh217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
