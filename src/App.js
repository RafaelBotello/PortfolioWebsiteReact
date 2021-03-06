import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap/";
import Menu from "./Components/Menu";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Container fluid={true}>
        <Row className="container-website">
          <Col className="menu-container" xl="3" lg="3" md="3">
            <div className="fixed">
              <Menu></Menu>
            </div>
          </Col>
          <Col className="content-container" xl="9" lg="9" md="9">
            <AboutMe />
            <Projects />
            <Contact />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
