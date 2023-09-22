import React from "react";
import "./navbar.css";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const navbar = () => {
  return (
    <div className="navbar">
      <h1>Portfolio</h1>
      <div className="navbar__list">
        <ul>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Skills</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar__icons">
        <ul>
          <li>
            <a>
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a>
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a>
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
