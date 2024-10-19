import React from 'react';
import NavBar from './NavBar';

export default function Home() {
  return (
    <div className="bg-slate-900 flex justify-center">
      <h1>My Homepage
        <p>Welcome to my homepage!</p>
      </h1>
      <NavBar />
    </div>
  );
}
