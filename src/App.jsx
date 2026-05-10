import React from 'react';
import Navbar from './components/Layout/Navbar';
import { AuroraBackground } from './components/UI/AuroraBackground';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Timeline from './components/Experience/Timeline';
import Achievements from './components/Achievements/Achievements';
import ContactInfo from './components/Contact/ContactInfo';
import DataCollector from './components/Contact/DataCollector';

import Welcome from './components/Welcome/Welcome';
import { ContainerScroll } from './components/UI/container-scroll-animation';

function App() {
  return (
    <AuroraBackground className="text-slate-900 dark:text-white selection:bg-primary-blue selection:text-background">
      <Navbar />

      <main className="pb-16 w-full">
        {/* Intro Section */}
        <div className="relative w-full overflow-hidden min-h-[40rem] md:min-h-[50rem]">
          <div className="relative z-10 w-full">
            <ContainerScroll
              titleComponent={<Welcome />}
            >
              <Hero />
            </ContainerScroll>
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
    </AuroraBackground>
  );
}

export default App;
