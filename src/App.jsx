import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
