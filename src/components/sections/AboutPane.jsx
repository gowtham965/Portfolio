const bioDesc = "I'm Gowtham R Gowda, an IT professional in Bengaluru with a B.Tech in Computer Science and Engineering (Data Science) from Presidency University. I work with Python, Java, JavaScript, and modern web technologies, and I'm actively preparing for graduate studies in the US focusing on cybersecurity and AI.";

const experiences = [
  { title: "MERN Full Stack Web Development Intern", location: "GeeksforGeeks · July 13, 2024 – Oct 6, 2024", desc: "Developed and deployed robust full-stack web applications using MongoDB, Express.js, React, and Node.js." },
  { title: "Graduate Engineer Trainee", location: "Microland, Bengaluru · Aug 19, 2025 – Feb 19, 2026", desc: "Contributed to infrastructure, automation, and internal tools using Python and web technologies." }
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
              <a href="/resumes/ResumeA1.pdf" download="Gowtham_R_Gowda_Cybersecurity_Resume.pdf" className="file-link">
                gowtham_cybersecurity.pdf
              </a>
              <span className="role-tag">[cybersecurity]</span>
            </div>
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
              <div style={{ fontSize: "11px", color: "var(--claude-haze-dim)" }}>
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
              <div style={{ fontSize: "11px", color: "var(--claude-haze-dim)" }}>
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
