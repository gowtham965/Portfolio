import { skills } from "../../data/skills";

function SkillsPane({ isActive, onFocus }) {
  return (
    <section
      className={`pane ${isActive ? "focused" : ""}`}
      onClick={onFocus}
      tabIndex={0}
    >
      <div className="pane-header">
        <span className="pane-id">1:</span>
        <span className="pane-title">skills</span>
      </div>
      <div className="pane-body">
        <div className="skills-container">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="skills-card">
              <h3>{category.replace("_", " ").toUpperCase()}</h3>
              <ul className="skills-list">
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPane;
