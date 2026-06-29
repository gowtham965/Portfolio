import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPane from "./components/sections/AboutPane";
import SkillsPane from "./components/sections/SkillsPane";
import ProjectsPane from "./components/sections/ProjectsPane";
import "./App.css";

function App() {
  const [activePane, setActivePane] = useState(0);

  return (
    <div className="app-container">
      <Navbar onFocusPane={setActivePane} />

      <main className="tmux-grid">
        <AboutPane isActive={activePane === 0} onFocus={() => setActivePane(0)} />
        <SkillsPane isActive={activePane === 1} onFocus={() => setActivePane(1)} />
        <ProjectsPane isActive={activePane === 2} onFocus={() => setActivePane(2)} />
      </main>

      <Footer activePane={activePane} onSelectPane={setActivePane} />
    </div>
  );
}

export default App;