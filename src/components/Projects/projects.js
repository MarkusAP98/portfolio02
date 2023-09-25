import React from "react";
import "./projects.css";
import BarplayClone from "../../assets/images/barplayClone02.png";

const projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS 👩🏻‍💻</h1>
      <div className="projects__wrapper">
        <div className="barplay">
          <a href="#">
            <img src={BarplayClone} className="barplay_img"></img>
          </a>
          <div className="barplay_text">
            <h3>Barplay Clone</h3>
            <p>
              Barplay is Very popular bar in Joensuu. they have this really good
              web design so I build a clone of it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
