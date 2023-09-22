import React from "react";
import "./main.css";
import video from "../../assets/videos/backgroundvideo.mp4";

const Main = () => {
  return (
    <div className="main">
       <div className="video-background">
       
      <video autoPlay loop muted>
        <source
          src={video}
          type="video/mp4"
        />
      </video>
    </div>
    </div>
   
  );
};

export default Main;
