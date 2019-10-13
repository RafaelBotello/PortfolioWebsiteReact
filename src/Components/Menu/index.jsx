import React from "react";
import Lorem from "../Lorem";
import "./style.css";
import { Container, Row, Col, Nav } from "react-bootstrap/";

const Menu = () => {
  return (
    <div>
      <div className="profile-picture"></div>
      <h1 className="name-text">Francisco Rafael Botello</h1>
      <Nav className="navbar" defaultActiveKey="/home" className="flex-column">
        <Nav.Item>
          <h1 className="menu-link disabled">Junior Web Developer</h1>
        </Nav.Item>
        <Nav.Link className="menu-link" href="#aboutme">
          About Me
        </Nav.Link>
        <Nav.Link className="menu-link" href="#Myprojects">
          My projects
        </Nav.Link>
        <Nav.Link className="menu-link" href="#contact">
          Contact
        </Nav.Link>
        <p className="last-updated">Last Updated October 2019 &copy;</p>
      </Nav>
    </div>
  );
};

export default Menu;
