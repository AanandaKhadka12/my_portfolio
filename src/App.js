import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="from-indigo-100 from-20% via-sky-100 via-80% to-emerald-10 bg-gradient-to-r w-full font-serif">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
