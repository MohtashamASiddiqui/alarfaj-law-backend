import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/topHalfBlueLogo.png";

const ArabicNavbar = () => {
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
    // Check if the URL starts with "ar/" and navigate accordingly
    if (url.startsWith("ar/")) {
      history(url);
    } else {
      // Navigate to the specified URL and close the menu after clicking
      history(`/ar/${url}`);
    }
    setShowMenu(false);
  };

  return (
    <div className={`nav-bg ${showMenu ? "show-background rtl" : ""}`}>
      <div className={`nav-con ${showMenu ? "show" : ""} rtl`}>
        <img className="nav-img" src={logo} alt="" />
        <a href="#about" className="nav-links">
          من نحن
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a className="nav-links" href="#news">
          أخبار ومقالات
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a className="nav-links" href="#expertise">
          خبراتنا
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a className="nav-links" href="#people">
          فريق العمل
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a className="nav-links" href="#contact">
          تواصل معنا
        </a>
        <hr className="separator" aria-orientation="vertical" />
        <a className="nav-links" href="/" onClick={() => handleLinkClick("")}>
          English
        </a>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      <Link to="/ar">
        <img className="logo" src={logo} alt="" />
      </Link>
    </div>
  );
};

export default ArabicNavbar;
