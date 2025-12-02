import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const closeMenu = () => {
  setIsOpen(false);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
  
  return (
    <header className={`${scrolled ? "header scrolled" : "header"} ${isOpen ? "menu-open" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <h1 className="client-JS">JS</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list d-flex gap-4">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/resume" onClick={closeMenu}>Resume</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/projects" onClick={closeMenu}>Projects</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
