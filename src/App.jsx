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

function App() {
  return (
    <AuroraBackground className="text-obsidian selection:bg-burgundy selection:text-cream">
      <Navbar />

      <main className="pb-16 w-full">
        {/* Hero Section */}
        <Hero />

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
