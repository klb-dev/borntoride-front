import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/webp/BTR-Logo.webp"; 

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className="nav-container">
      <img
        src={logo}
        alt="BTR Logo - green eagle with skateboard"
        loading="lazy"
        className="logo"
      />

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={menuOpen ? "active" : ""}>
        <ul>
          {["home", "about", "events", "gallery", "donate", "contact"].map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={handleLinkClick}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
