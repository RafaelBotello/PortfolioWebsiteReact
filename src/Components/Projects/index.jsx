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
          link="https://rafaelbotello.github.io/JerseyXecommerce-V1/product.html"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FPCVD54LW/image.png"
          imgDescription="Screenshot for Jersey X Ecommerce website"
          projectDescription="Jersey X v1(Semantic HTML/CSS)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/JerseyXecommerce-V2"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FPD09Q32S/image.png"
          imgDescription="Screenshot for Jersey X Ecommerce version 2 website"
          projectDescription="Jersey X v2(React)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/JerseyXecommerce-V3"
          imageUrl="https://files.slack.com/files-pri/T5VCY49B3-FNK4RD18B/image.png"
          imgDescription="Screenshot for Jersey X Ecommerce version 3 website"
          projectDescription="Jersey X v3(Databases/Node/JSON Ajax)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/JerseyXadminApp"
          imageUrl="https://github.com/RafaelBotello/JerseyXadminApp/blob/master/img/home.png?raw=true"
          imgDescription="Screenshot for Jersey X Admin website"
          projectDescription="Jersey X Admin app(c#)"
          descriptionClass="text-img"
        />
        <ProjectCont
          link="https://github.com/RafaelBotello/jerseyxPWA"
          imageUrl="https://github.com/RafaelBotello/jerseyxPWA/blob/master/img/auditpwa.png?raw=true"
          imgDescription="Screenshot for Jersey PWA"
          projectDescription="Jersey X PWA (Web Accessibility)"
          descriptionClass="text-img"
        />
        {/* https://media.giphy.com/media/LMh3E7aMHaC0TjY0En/giphy.gif */}
      </div>
    </div>
  );
};

export default Projects;
