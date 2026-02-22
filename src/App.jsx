import React from 'react';
import Navbar from './components/Layout/Navbar';
import Background from './components/Layout/Background';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Timeline from './components/Experience/Timeline';
import Achievements from './components/Achievements/Achievements';
import ContactInfo from './components/Contact/ContactInfo';
import DataCollector from './components/Contact/DataCollector';

import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-primary-cyan selection:text-background">
      <Background />
      <Navbar />

      <main className="pb-16">
        {/* Intro Section with Background Video */}
        <div className="relative w-full overflow-hidden min-h-screen">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/InShot_20260222_083836318.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-background/20" />
          </div>

          <div className="relative z-10 w-full">
            <Welcome />
            <Hero />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Timeline />
          <Projects />
          <Skills />
          <Achievements />
          <ContactInfo />
          <DataCollector />
        </div>
      </main>

    </div>
  );
}

export default App;
