import React from "react";
import "./projects.css";
import BarplayClone from "../../assets/images/barplayClone02.png";


const projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS 👩🏻‍💻</h1>
      <div className="projects__wrapper">
        <div className="allProjects">
          <a href="#">
            <img src={BarplayClone} className="allProjects_img"></img>
          </a>
          <div className="allProjects_text">
            <h3>Barplay</h3>
            <p>
              Barplay is a very popular bar in joensuu. They have this nice
              clean design so I had to challenge myself to build a similar one.
              This website purpose is to let the costumer know when the bar is
              open and what service food or drinks they offer.
            </p>
            <div className="allProjects_btns">
              <button>View Code</button>
              <button>Live Website</button>
            </div>
          </div>
        </div>

        {/* --------UUno-------- */}
        <div className="allProjects" style={{ flexDirection: "row-reverse" }}>
          <a href="#">
            <img src={BarplayClone} className="allProjects_img"></img>
          </a>
          <div className="allProjects_text">
            <h3>Personal Trainer</h3>
            <p>
              Barplay is a very popular bar in joensuu. They have this nice
              clean design so I had to challenge myself to build a similar one.
              This website purpose is to let the costumer know when the bar is
              open and what service food or drinks they offer.
            </p>
            <div className="allProjects_btns">
              <button>View Code</button>
              <button>Live Website</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
