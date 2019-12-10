import React from "react";
import Lorem from "../Lorem";
import "./styles.css";
import ProjectCont from "./ProjectCont";

const Projects = () => {
  return (
    <div id="Myprojects" className="projects-container">
      <h2 className="projects-title-text">
        My Projects
        <hr />
      </h2>
      <div className="content-text">
        <ProjectCont
          link="https://codepen.io/Rafaelbotello/project/full/AQGdvG"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FRHEHBVT7/image.png"
          imgDescription="Screenshot for Gateway website"
          projectDescription="Gateway(Semantic HTML/CSS)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/JerseyXecommerce-V2"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FPD09Q32S/image.png"
          imgDescription="Screenshot for Jersey X Ecommerce version 2 website"
          projectDescription="Jersey X v2"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://jerseyxw.herokuapp.com/"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FNK4RD18B/image.png"
          imgDescription="Screenshot for Jersey X Ecommerce version 3 website"
          projectDescription="Jersey X(React/Node/JSON Ajax)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/JerseyXadminApp"
          imageUrl="https://github.com/RafaelBotello/JerseyXadminApp/blob/master/img/home.png?raw=true"
          imgDescription="Screenshot for C# Admin website"
          projectDescription="C# Admin app(c#/Databases)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/jerseyxPWA"
          imageUrl="https://github.com/RafaelBotello/jerseyxPWA/blob/master/img/auditpwa.png?raw=true"
          imgDescription="Screenshot for Jersey PWA"
          projectDescription="Jersey X PWA (React/Web Accessibility)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://cssprojectexample.netlify.com/"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FRGNFGUAY/image.png"
          imgDescription="Screenshot for Css Grid Example"
          projectDescription="Css Grid(CSS)"
          descriptionClass="text-img"
        />
        {/* https://media.giphy.com/media/LMh3E7aMHaC0TjY0En/giphy.gif */}
      </div>
    </div>
  );
};

export default Projects;
