import React from "react";

import Wtf from "./Components/Navbar/navbar"
import ControlledCarousel from "./Components/Carousel/carousel"
import { Container, Row, Col } from "./Components/Grid"
import style from './style'
import Button from "react-bootstrap/Button";



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
            <h1 style={style.test1}>What’s black white and red all over? </h1>
          </Col>
        </Row>
        <Row>
          <Col size="12">
            <h1 style={style.test2}>Your New(s) Media Habit</h1>
          </Col>
        </Row>
        <Row>
          <Col size="6">
           <Button variant="outline-danger" style={style.registerbtn}>Danger</Button>
        
          </Col>
          
          <Col size="6">
            <Button variant="danger" style={style.loginbtn}>Danger</Button>
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
