import react from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="custom-navbar">
      <div className="nav-logo">DevPortfolio</div>

      <ul className="nav-menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-buttons">
        <button className="btn login-btn">Log in</button>
        <button className="btn signup-btn">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
