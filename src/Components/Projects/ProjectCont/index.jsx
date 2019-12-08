import React from "react";

const ProjectCont = props => {
  return (
    <div className="image-container">
      <a href={props.link} target="_blank">
        <img
          src={props.imageUrl}
          className="images"
          alt={props.imgDescription}
        ></img>
        <p className={props.descriptionClass}>{props.projectDescription}</p>
      </a>
    </div>
  );
};

export default ProjectCont;
