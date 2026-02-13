import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Newsletter from './components/Newsletter';
import Map from './components/Map';
import SmoothScroll from './components/SmoothScroll';
import OnlineTherapy from './components/OnlineTherapy';
import PresencialTherapy from './components/PresencialTherapy';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden w-full">
      <SmoothScroll />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Timeline />
        <Methodology />
        <Services />
        <OnlineTherapy />
        <PresencialTherapy />
        <Map />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
