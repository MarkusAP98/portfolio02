import React from "react";
import "./skills.css";

const skills = () => {
  return (
    <div className="skills">
      <h1>ABOUT ME</h1>
      <div className="skills-wrapper">
        <div className="about_txt">
          <h3>Get To Know Me!</h3>
          <p>
            I'm a <strong>Frontend Web Developer</strong> building the Front-end
            of Websites and Web Applications. Check out some of my work in the{" "}
            <strong>Projects</strong> section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in <strong>Web Development</strong>. Feel free to
            Connect or Follow me on my{" "}
            <a className="skills-links">
              <strong>Linkedin </strong>
            </a>
            where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open for <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience then don't hesitate to contact me
            with{" "}
            <a className="skills-links">
              <strong>Linkedin</strong>
            </a>
            .
          </p>
          <br></br>
          <br></br>
          <button className="skills-btn-text">
            <a>Linkedin</a>
          </button>
        </div>
        <div className="skills-showcase">
          <h3>My Skills</h3>
          <button className="skills-btn">HTML</button>
          <button className="skills-btn">CSS</button>
          <button className="skills-btn">JavaScript</button>
          <button className="skills-btn">React</button>
          <button className="skills-btn">Git</button>
          <button className="skills-btn">GitHub</button>
          <button className="skills-btn">Git Graph</button>
          <button className="skills-btn">Bootstrap</button>
          <button className="skills-btn">Taillwind</button>
          <button className="skills-btn">Responsive Design</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default skills;
