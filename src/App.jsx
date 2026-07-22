import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { CursorGlow, ScrollProgress, BackToTop } from './components/ChromeExtras';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import ResearchInterests from './sections/ResearchInterests';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen visible={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Certificates />
        <ResearchInterests />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
