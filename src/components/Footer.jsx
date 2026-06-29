function Footer({ activePane, onSelectPane }) {
  const tabs = [
    { idx: 0, label: "About" },
    { idx: 1, label: "Skills" },
    { idx: 2, label: "Projects" },
  ];

  return (
    <div className="tmux-status">
      <span>
        {tabs.map((tab) => (
          <button
            key={tab.idx}
            className={`tab ${activePane === tab.idx ? "active" : ""}`}
            onClick={() => onSelectPane(tab.idx)}
            type="button"
          >
            [{tab.idx}] {tab.label}
          </button>
        ))}
      </span>
      <span>
        gowthamgowda.dev
      </span>
    </div>
  );
}

export default Footer;