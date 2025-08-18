import Image from "next/image";
'use client';

import { useState, useEffect } from 'react';

const UpcomingProjects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Upcoming projects with GIFs
  const upcomingProjects = [
    {
      id: 1,
      title: "Project Alpha",
      gif: "/images/upcoming/post-1.gif",
      status: "In Development"
    },
    {
      id: 2,
      title: "Rhythm Quest",
      gif: "/images/upcoming/post-2.gif",
      status: "Pre-Alpha"
    },
    {
      id: 3,
      title: "Cyber Runner 2077",
      gif: "/images/upcoming/post-3.gif",
      status: "Concept"
    },
    {
      id: 4,
      title: "Puzzle Dimension",
      gif: "/images/upcoming/post-4.gif",
      status: "Prototyping"
    },
    {
      id: 5,
      title: "Action Adventure",
      gif: "/images/upcoming/post-5.gif",
      status: "Early Development"
    },
    {
      id: 6,
      title: "Arcade Fighter",
      gif: "/images/upcoming/post-6.gif",
      status: "Concept"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % upcomingProjects.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [upcomingProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % upcomingProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + upcomingProjects.length) % upcomingProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Development':
        return 'bg-green-100 text-green-800';
      case 'Pre-Alpha':
        return 'bg-yellow-100 text-yellow-800';
      case 'Concept':
        return 'bg-blue-100 text-blue-800';
      case 'Prototyping':
        return 'bg-purple-100 text-purple-800';
      case 'Early Development':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="upcoming-projects" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Coming Soon</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Upcoming Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Get a sneak peek at the exciting projects I&apos;m currently working on. These are yet to be made live.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {upcomingProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 bg-white relative"
                >
                  <div className="relative h-96 overflow-hidden">
                    {/* GIF Display */}
                    <Image src={project.gif} 
                      alt={project.title}
                      className="w-full h-full object-contain"
                    / />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {upcomingProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-blue-400 w-8'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Want to stay updated on these projects? Follow my development journey!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/murkeh217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-blue-400 text-blue-400 rounded-md text-sm font-medium hover:bg-blue-400 hover:text-white transition-colors"
            >
              Follow on GitHub
            </a>
            <a
              href="https://www.youtube.com/@murkeh217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingProjects;
