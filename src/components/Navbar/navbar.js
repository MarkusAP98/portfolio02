import React, { useState } from "react";
import "./navbar.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
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
              <a>
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a>
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
      </div>
    </div>
  );
};

export default Navbar;
