import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <h1 className="client-name">JS</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list d-flex gap-4">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/reusme">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
