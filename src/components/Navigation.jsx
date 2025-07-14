import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FaAlignRight } from "react-icons/fa";
import MobileResponsive from "./MobileResponsive";
import coolbackgrounds from "../assets/coolbackgrounds-unsplash-zeller.jpg";

const Navigation = () => {
  return (
    <>
      <div className="Nav-container">
        <div className="Nav-area">
          <div className="my-introduction-name">
            <h4>LISA EMESOWUM.A</h4>
          </div>
          {/* ===================================HOME ===============================================================*/}
          <div className="Right-area">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-item active-nav" : "nav-item"
              }
            >
              Home
            </NavLink>
            {/* ===================================ABOUTME============================================================= */}
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? "nav-item active-nav" : "nav-item"
              }
            >
              About-Me
            </NavLink>
            {/* =================================== Projects===============================================================*/}
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "nav-item active-nav" : "nav-item"
              }
            >
              Projects
            </NavLink>
            {/* ====================================Skiils=================================================================== */}
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? "nav-item active-nav" : "nav-item"
              }
            >
              Skills
            </NavLink>
            {/* ====================================Blogs======================================================================= */}
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-item active-nav" : "nav-item"
              }
            >
              Blogs(My Experience)
            </NavLink>
            {/* ====================================contact======================================================================= */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-button active-button" : "nav-button"
              }
            >
              Contact
            </NavLink>
          </div>
            <MobileResponsive />
        </div>
      </div>
    </>
  );
};

export default Navigation;
