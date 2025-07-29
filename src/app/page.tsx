import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import UpcomingProjects from '../components/UpcomingProjects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <UpcomingProjects />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
