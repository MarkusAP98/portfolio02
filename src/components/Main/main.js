import React from "react";
import "./main.css";
import video from "../../assets/videos/backgroundVid.mp4";

const Main = () => {
  return (
    <div className="main">
       <div className="video-background">
      <video autoPlay loop muted>
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Add your content on top of the video */}
      <div className="content">{/* Your content goes here */}</div>
    </div>
    </div>
   
  );
};

export default Main;
