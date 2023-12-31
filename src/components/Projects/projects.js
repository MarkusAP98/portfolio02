import React from "react";
import "./projects.css";
import { AiFillLinkedin } from "react-icons/ai";
import BarplayClone from "../../assets/images/barplayClone02.png";
import ChatGpt3 from "../../assets/images/chat_gpt3.png";
import PersonalTrainer from "../../assets/images/PT-uuno.png";
import Resturaunt from "../../assets/images/Resturaunt.png";

const projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS 👩🏻‍💻</h1>
      <div className="projects__wrapper">
        <div className="allProjects">
          <a href="https://barplayclone.web.app/" target="_blank">
            <img src={BarplayClone} className="allProjects_img"></img>
          </a>
          <div className="allProjects_text">
            <h3>Barplay</h3>
            <p>
              "Barplay is a very popular bar in Joensuu. They have this nice,
              clean design, so I had to challenge myself to build a similar one.
              This website's purpose is to let the customer know when the bar is
              open and what services, food, or drinks they offer."
            </p>
            <div className="allProjects_btns">
              <a href="https://github.com/MarkusAP98/barplay02" target="_blank">
                <button>View Code</button>
              </a>
              <a href="https://barplayclone.web.app/" target="_blank">
                <button>Live Website</button>
              </a>
            </div>
          </div>
        </div>

        {/* --------ChatGpt3-------- */}
        <div className="allProjects-reverse">
          <a
            href="https://chatgpt-3-2faf6.web.app/"
            target="
          _blank"
          >
            <img src={ChatGpt3} className="allProjects_img"></img>
          </a>
          <div className="allProjects_text">
            <h3>ChatGpt3</h3>
            <p>
              "In recent years, ChatGpt3 has become so big, with all the amazing
              things you can do with it. So it was cool to make a site that has
              a ChatGpt3 theme."
            </p>
            <div className="allProjects_btns">
              <a href="https://github.com/MarkusAP98/Chat-GPT3" target="_blank">
                <button>View Code</button>
              </a>
              <a href="https://chatgpt-3-2faf6.web.app/" target="_blank">
                <button>Live Website</button>
              </a>
            </div>
          </div>
        </div>
        {/* ---------personal trainer----- */}
        <div className="allProjects">
          <a href="https://personaltrainer-uuno.web.app/" target="_blank">
            <img src={PersonalTrainer} className="allProjects_img"></img>
          </a>
          <div className="allProjects_text">
            <h3 id="projects_PT">PersonalTrainer</h3>
            <p>
              "I have a friend who is a Personal Trainer, and he happened to
              need a website. So I made one for him just to get more training in
              making websites. The design is very simple, and he is happy with
              the website."
            </p>
            <div className="allProjects_btns">
              <a
                href="https://github.com/MarkusAP98/PtUunoSilvennoinen.github.io"
                target="_blank"
              >
                <button>View Code</button>
              </a>

              <a href="https://personaltrainer-uuno.web.app/" target="_blank">
                <button>Live Website</button>
              </a>
            </div>
          </div>
        </div>

        {/* --------Resturuant Gerich--------- */}

        <div className="allProjects-reverse">
          <a href="https://gerich-restaurant-c468b.web.app/" target="_blank">
            <img src={Resturaunt} className="allProjects_img"></img>
          </a>
          <div className="allProjects_text">
            <h3>Restaurant</h3>
            <p>
              Gericht has this nice Italian Restaurant Theme. With Beautiful
              images i was able to make this nice looking website.
            </p>
            <div className="allProjects_btns">
              <a
                href="https://github.com/MarkusAP98/Gerich-Resturant"
                target="_blank"
              >
                <button>View Code</button>
              </a>

              <a
                href="https://gerich-restaurant-c468b.web.app/"
                target="_blank"
              >
                <button>Live Website</button>
              </a>
            </div>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/in/markus-phantha-245605239/"
          target="_blank"
        >
          <button className="Ctn-Btn">
            Contact me <AiFillLinkedin className="projects_in-btn" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default projects;
