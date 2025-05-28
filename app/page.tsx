import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import About from './About';

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden bg-zinc-800">
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      <Hero />
      <About />
    </div>
  );
}
