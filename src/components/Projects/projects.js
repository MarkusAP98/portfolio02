import React from "react";
import "./projects.css";
import BarplayClone from "../../assets/images/barplay_clone.png";

const projects = () => {
  return (
    <div className="projects">
    <h1>Projects</h1>
      <div className="projects__wrapper">
        <div className="barplay">
          <a href="#">
            <img src={BarplayClone} className="barplay_img"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default projects;
