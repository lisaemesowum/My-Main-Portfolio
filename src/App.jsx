import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/NavPages/Home";
import AboutMe from "./components/NavPages/AboutMe";
import Projects from "./components/NavPages/Projects";
import Skills from "./components/NavPages/Skills";
import Contact from "./components/NavPages/Contact";
import Blogs from "./components/NavPages/Blogs";
import Navigation from "./components/Navigation";
// import MobileResponsive from "./components/MobileResponsive";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
   
      <BrowserRouter>
       <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
       {/* <MobileResponsive/> */}
    </>
  );
}

export default App;
