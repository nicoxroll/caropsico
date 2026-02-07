import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Methodology />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
