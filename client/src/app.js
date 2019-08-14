import React from "react";
import Wtf from "./Components/Navbar/navbar"
import ControlledCarousel from "./Components/Carousel/carousel"
import { Container, Row, Col } from "./Components/Grid"

//create grid here

function App() {
  return (
    <div>
      <Wtf />
      <Container >
        <Row >
          <Col size="12">
            <ControlledCarousel />
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <h1>test</h1>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <h1>test1</h1>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <h1>test2</h1>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Row>
          <Col size="4">
            <h1>test1</h1>
          </Col>
          <Col size="4">
            <h1>test1</h1>
          </Col>
          <Col size="4">
            <h1>test1</h1>
          </Col>
        </Row>
    </div>
  );
}

export default App;
