// src/App.jsx
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Hobbies from "./components/Hobbies";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <NavBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
