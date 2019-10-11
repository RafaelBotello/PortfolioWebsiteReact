import React from "react";
import "./style.css";
import { Container, Row, Col, Button } from "react-bootstrap/";

const Footer = () => {
  return (
    <React.Fragment>
      <Col lg="3">
        <h1>Social Media:</h1>
        <ul>
          <li>
            <a href="https://www.instagram.com/jimmyplox/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/RafaelBotello" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rafael-botello-994350190/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/RafaelBotello7" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </Col>
      <Col lg="3">
        <h1>Contact:</h1>
        <ul>
          <li>
            <a href="mailto:probablynotmyemail@mail.com" target="_blank">
              probablynotmyemail@mail.com
            </a>
          </li>
        </ul>
      </Col>
      <Col lg="3"></Col>
      <Col lg="3"></Col>
    </React.Fragment>
  );
};

export default Footer;
