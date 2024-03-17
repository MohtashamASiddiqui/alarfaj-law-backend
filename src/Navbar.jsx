import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/topHalfBlueLogo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.matches(".burger-menu") && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = (url) => {
    // If the URL is for the homepage, navigate to the specified section
    if (url === "/") {
      history(url);
    } else {
      // Otherwise, navigate to the specified URL
      window.location.href = url;
    }
    setShowMenu(false); // Close the menu after clicking
  };

  return (
    <div className={`nav-bg ${showMenu ? "show-background" : ""}`}>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className={`nav-con ${showMenu ? "show" : ""}`}>
        <img className="nav-img" src={logo} alt="" />
        <a
          href="#about"
          className="nav-links"
          onClick={() => handleLinkClick("/#about")}
        >
          About Us
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a
          href="#news"
          className="nav-links"
          onClick={() => handleLinkClick("/#news")}
        >
          News & Insight
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a
          href="#expertise"
          className="nav-links"
          onClick={() => handleLinkClick("/#expertise")}
        >
          Our Expertise
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a
          href="#people"
          className="nav-links"
          onClick={() => handleLinkClick("/#people")}
        >
          People
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a
          href="#contact"
          className="nav-links"
          onClick={() => handleLinkClick("/#contact")}
        >
          Contact Us
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a href="/ar" className="nav-links">
          عربي
        </a>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar;
