import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/Qualification/Qualification";
import Project from "./components/projects/Project";
import Certificate from "./components/certificate/Certificate";
import { useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  // Dark Mode State Handler
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification darkMode={darkMode} />
          <Project toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Certificate />
          <Contact />
        </main>

        <Footer />
        <ScrollUp />
      </div>
    </>
  );
}

export default App;
