import React from "react";
import "./footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer_text">
          <h1>Markus Arunchai Phantha</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
          </p>
        </div>
        <div className="footer_icons">
          <h1>Social</h1>
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
      <div className="footer-copyRight">
        <p>© CopyRight 2023. Made by Markus Phantha</p>
      </div>
    </div>
  );
};

export default footer;
