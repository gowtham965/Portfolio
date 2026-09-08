const bioDesc = "AI engineer who's built and deployed RAG and agentic systems from scratch, writing the retrieval pipeline, measuring answer quality, and fixing what broke in production. Six months of enterprise infrastructure training (Linux, networking, virtualization, cloud) adds a practical edge for field and on-site work. Open to travel and on-site/field deployment.";

const experiences = [
  { title: "Graduate Engineer Trainee", location: "Microland Limited, Bengaluru · June 2025 – Feb 2026", desc: "Completed an intensive technical training program covering Windows Server Administration, Networking (Routing & Switching), Virtualization, Linux Administration, Cybersecurity, and Cloud Fundamentals. Ranked among the top 5 of 50 trainees based on technical assessments." }
];

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Data Science Specialization (CGPA: 7.39)",
    location: "Presidency University",
    duration: "2021–2025"
  },
  {
    degree: "Pre-University Course (PCMC)",
    specialization: "Physics, Chemistry, Math, CS (Score: 83%)",
    location: "Chethana PU College, Yelahanka",
    duration: "2019–2021"
  },
  {
    degree: "Class X Secondary School",
    specialization: "ICSE Syllabus (Score: 87%)",
    location: "Cauvery Primary and High School",
    duration: "2019"
  }
];

function AboutPane({ isActive, onFocus }) {
  return (
    <section
      className={`pane ${isActive ? "focused" : ""}`}
      onClick={onFocus}
      tabIndex={0}
    >
      <div className="pane-header">
        <span className="pane-id">0:</span>
        <span className="pane-title">about</span>
      </div>
      <div className="pane-body">
        <p className="bio-text">{bioDesc}</p>

        <div className="section-title">Resumes</div>
        <div className="terminal-resumes-container">
          <div className="terminal-file-list">
            <div className="terminal-file-row">
              <span className="file-icon">📄</span>
              <a href="/resumes/gowtham_datascience.pdf" download="Gowtham_R_Gowda_DataScience_Resume.pdf" className="file-link">
                gowtham_datascience.pdf
              </a>
              <span className="role-tag">[data_science]</span>
            </div>
            <div className="terminal-file-row">
              <span className="file-icon">📄</span>
              <a href="/resumes/gowtham_fullstack.pdf" download="Gowtham_R_Gowda_FullStack_Resume.pdf" className="file-link">
                gowtham_fullstack.pdf
              </a>
              <span className="role-tag">[full_stack]</span>
            </div>
          </div>
        </div>

        <div className="section-title">Experience</div>
        {experiences.map((exp, idx) => (
          <div key={idx} className="row highlight">
            <div>
              <div className="label">{exp.title}</div>
              <div style={{ fontSize: "11px", color: "var(--claude-mist)" }}>
                {exp.desc}
              </div>
            </div>
            <div className="value">{exp.location}</div>
          </div>
        ))}

        <div className="section-title" style={{ marginTop: "1rem" }}>Education</div>
        {education.map((edu, idx) => (
          <div key={idx} className="row highlight">
            <div>
              <div className="label">{edu.degree}</div>
              <div style={{ fontSize: "11px", color: "var(--claude-mist)" }}>
                {edu.specialization}
              </div>
            </div>
            <div className="value">{edu.location} · {edu.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPane;
