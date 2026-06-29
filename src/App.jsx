import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPane from "./components/sections/AboutPane";
import SkillsPane from "./components/sections/SkillsPane";
import ProjectsPane from "./components/sections/ProjectsPane";
import "./App.css";

function App() {
  const [activePane, setActivePane] = useState(0);
  const [prefixActive, setPrefixActive] = useState(false);

  useEffect(() => {
    let prefixTimeout = null;

    const handleKeyDown = (e) => {
      // 1. Direct focus using Alt + 0-2
      if (e.altKey && e.key >= "0" && e.key <= "2") {
        e.preventDefault();
        setActivePane(parseInt(e.key, 10));
        setPrefixActive(false);
        return;
      }

      // 2. Ctrl + b prefix toggler
      if (e.ctrlKey && e.key === "b") {
        e.preventDefault();
        setPrefixActive(true);
        if (prefixTimeout) clearTimeout(prefixTimeout);
        prefixTimeout = setTimeout(() => {
          setPrefixActive(false);
        }, 2000);
        return;
      }

      // Escape to cancel prefix
      if (e.key === "Escape") {
        setPrefixActive(false);
        return;
      }

      // 3. Handle key after Ctrl + b prefix
      if (prefixActive) {
        if (e.key >= "0" && e.key <= "2") {
          e.preventDefault();
          setActivePane(parseInt(e.key, 10));
          setPrefixActive(false);
          return;
        }

        // Arrow navigation
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          if (activePane === 1 || activePane === 2) {
            setActivePane(0);
          }
          setPrefixActive(false);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          if (activePane === 0) {
            setActivePane(1);
          }
          setPrefixActive(false);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (activePane === 2) {
            setActivePane(1);
          }
          setPrefixActive(false);
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (activePane === 1) {
            setActivePane(2);
          }
          setPrefixActive(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (prefixTimeout) clearTimeout(prefixTimeout);
    };
  }, [activePane, prefixActive]);

  return (
    <div className="app-container">
      <Navbar onFocusPane={setActivePane} />
      
      <main className="tmux-grid">
        <AboutPane isActive={activePane === 0} onFocus={() => setActivePane(0)} />
        <SkillsPane isActive={activePane === 1} onFocus={() => setActivePane(1)} />
        <ProjectsPane isActive={activePane === 2} onFocus={() => setActivePane(2)} />
      </main>

      <Footer activePane={activePane} onSelectPane={setActivePane} />

      {prefixActive && (
        <div id="prefix-indicator">
          Prefix Active
        </div>
      )}
    </div>
  );
}

export default App;