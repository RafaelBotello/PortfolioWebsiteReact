import React from "react";
import Lorem from "../Lorem";
import "./styles.css";

const Languages = () => {
  return (
    <div id="Myprojects" className="languages-container">
      <h1 className="languages-title-text">
        My Projects
        <hr />
      </h1>
      <div className="content-text">
        <div className="image-container">
          <a
            href="https://rafaelbotello.github.io/JerseyXecommerce-V1/product.html"
            target="_blank"
          >
            <h1>Jersey X v1</h1>
            <img
              src="https://files.slack.com/files-pri/T5VCY49B3-FPCVD54LW/image.png"
              className="images"
            ></img>
          </a>
        </div>
        <div className="image-container">
          <a
            href="https://github.com/RafaelBotello/JerseyXecommerce-V2"
            target="_blank"
          >
            <h1>Jersey X v2</h1>
            <img
              src="https://files.slack.com/files-pri/T5VCY49B3-FPD09Q32S/image.png"
              className="images"
            ></img>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/RafaelBotello/JerseyXecommerce-V3"
            target="_blank"
          >
            <h1>Jersey X v3</h1>
            <img
              src="https://files.slack.com/files-pri/T5VCY49B3-FNK4RD18B/image.png"
              className="images"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Languages;
