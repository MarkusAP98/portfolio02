import React from "react";
import "./skills.css";

const skills = () => {
  return (
    <div className="skills">
      <h1>About Me</h1>
      <div className="skills-wrapper">
        <div className="about_txt">
        <h3>Get To Know Me!</h3>
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
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
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default skills;
