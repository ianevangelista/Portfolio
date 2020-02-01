import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../Styles/Navigationbar.css";
import cv from "../Local_files/cv.pdf";

export default function Navigationbar() {
  return (
    <nav
      className="navbar py-0 navbar-expand-lg navbar-dark sticky-top navigationbar-image"
      role="navigation"
    >
      <li className="navbar-brand">
        <NavLink className="nav-link" exact to="/">
          IAN EVANGELISTA
        </NavLink>
      </li>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav">
          <li className="nav-item custom-nav-text mr-4 my-auto">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              CURRICULUM VITAE
            </a>
          </li>
          <li className="nav-item custom-nav-text mr-4 my-auto">
            <Link to="/#about">OM MEG</Link>
          </li>

          <li className="nav-item custom-nav-text mr-4 my-auto">
            <Link to="/#projects">PROSJEKTER</Link>
          </li>
          <li className="nav-item custom-nav-text mr-4 my-auto">
            <Link to="/#contact">KONTAKT MEG</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
