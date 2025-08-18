
const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hi, I&apos;m</span>{' '}
              <span className="block text-blue-600 xl:inline">Murtaza</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              A passionate Unity3D Game Developer based in India with a strong focus on game development. 
              I bring a multidisciplinary skill set with experience in web design and 3D modeling, 
              crafting engaging games with distinctive art styles and mechanics.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-blue-400 text-base font-medium rounded-md text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden">
                <div className="aspect-w-10 aspect-h-7 sm:aspect-w-16 sm:aspect-h-10 lg:aspect-w-1 lg:aspect-h-1">
                  <img 
                    src="/images/intro-bg.jpg" 
                    alt="Murtaza Kanorwala" 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
