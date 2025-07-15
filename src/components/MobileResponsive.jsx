import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileResponsive.css";
import { FaAlignRight } from "react-icons/fa";
const MobileResponsive = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <>
    {menuOpen && <div className="overlay-blur" onClick={() => setMenuOpen(false)}></div>}
    <div className="mobile-nav">
      <button className="chervon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaAlignRight className={menuOpen ? "rotate-icon" : ""}/>
      
      </button>
      
      {/* mobile Links */}
      {menuOpen &&  (
        <ul className="drop-down">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item1 active-nav1" : "nav-item1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
               isActive ? "nav-item1 active-nav1" : "nav-item1"
              }
            >
              About-Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
              isActive ? "nav-item1 active-nav1" : "nav-item1"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
              isActive ? "nav-item1 active-nav1" : "nav-item1"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-item1 active-nav1" : "nav-item1"
              }
            >
              Blogs(My Experience)
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-button active-button" : "nav-button"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </div>
   </>
  );
};

export default MobileResponsive;
