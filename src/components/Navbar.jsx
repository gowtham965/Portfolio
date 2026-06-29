function Navbar({ onFocusPane }) {
  const socialLinks = [
    { label: "GitHub", url: "https://github.com/gowtham965" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gowthamgowda965/" },
    { label: "Email", url: "mailto:gouthamgowda965@gmail.com" },
  ];

  return (
    <header className="navbar">
      <h1
        className="brand-iridescent"
        tabIndex={0}
        onClick={() => onFocusPane(0)}
        onKeyDown={(e) => e.key === "Enter" && onFocusPane(0)}
        title="Click to focus Pane 0 (about)"
      >
        Gowtham R Gowda
      </h1>
      <nav>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-organic"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;