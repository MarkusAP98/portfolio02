import React, { useState } from "react";
import "./navbar.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__bigscreen">
        <h1>Portfolio</h1>
        <div className="navbar__list">
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="navbar__icons">
          <ul>
            <li>
              <a href="https://github.com/MarkusAP98" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/markus-phantha-245605239/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ------smallscreenMenu--------- */}
      <div className="navbar__smallscreen">
        <div className="navbar__smallscreen-hamburger">
          <h1>Portfolio</h1>

          <GiHamburgerMenu
            className="hamburger"
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        </div>
        {/*------ after clicked hamburger this will be open----- */}
        {toggleMenu && (
          <div className="navbar__smallscreen-overlay">
          <div className="sm-header">
            <h1>Portfolio</h1>
            <RxCross1 className="x"
              onClick={() => setToggleMenu(false)}
            />
          </div>
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
