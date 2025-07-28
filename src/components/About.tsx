const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Getting to know me
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A 32-year-old Game Developer from India specializing in Unity3D development
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <div className="mt-8 lg:mt-0">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  My Journey
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  Hi, I&apos;m a Unity3D Game Developer based in India with a strong focus on game development. 
                  I bring a multidisciplinary skill set to the table with additional experience in web design 
                  and basic proficiency in Blender for 3D modeling and asset creation.
                </p>
                <p className="mt-3 text-lg text-gray-500">
                  My passion lies in crafting engaging and visually distinctive games, particularly within the 
                  genres of 3D action, cel-shaded art styles, rhythm-based gameplay, arcade mechanics, puzzle 
                  challenges, and roguelike systems. I&apos;m constantly experimenting and sharing my work through 
                  my platforms.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="prose prose-blue prose-lg text-gray-500">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  What I Do
                </h3>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-medium">•</span>
                    <span className="ml-2">Unity3D Game Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-medium">•</span>
                    <span className="ml-2">2D/3D Game Prototyping and Physics Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-medium">•</span>
                    <span className="ml-2">Mobile Game Optimization and Performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-medium">•</span>
                    <span className="ml-2">3D Modeling and Asset Creation (Blender)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-medium">•</span>
                    <span className="ml-2">Web Design and Frontend Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-medium">•</span>
                    <span className="ml-2">Quality Assurance and Game Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Let&apos;s Work Together
              </h3>
              <p className="mt-4 text-lg text-gray-500">
                I&apos;m always excited about new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
              </p>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
