import React from "react";
import "./styles.css";

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme-container">
      <h1 className="title-text">
        About Me
        <hr />
      </h1>
      <div className="content-text">
        <p>
          To be a visionary of the entire information network is something that
          I am very excited, knowing that not everything is known is all there
          is, seeing the great possibilities of creating something new with my
          ideas and sharing it with the world can become the idea of what I
          would like to dedicate my life to; or at least a large part of it. But
          in the end any idea becomes a simple dream if one does not have the
          dedication, effort and perseverance necessary to achieve it, I am not
          blind to this kind of subject, I consider myself a self-taught person;
          Each topic of my interest I put as a short-term goal, I seek
          information and only when I reach the point where I feel I understand
          it at the level I would like, I can leave it.
        </p>
      </div>
      <div className="content-img"></div>
    </div>
  );
};

export default AboutMe;
