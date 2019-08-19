import React from "react";
import Carousel from 'react-bootstrap/Carousel'


function ControlledCarousel(props) {
  return (
    // <Carousel>
      <Carousel.Item>
        <p>{props.title}</p>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-photo/easter-bunny-rabbit-pink-painted-260nw-1032901183.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      /* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-photo/easter-bunny-rabbit-pink-painted-260nw-1032901183.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.shutterstock.com/image-photo/easter-bunny-rabbit-pink-painted-260nw-1032901183.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item> */
    // </Carousel>
  
  )};

// render(<ControlledCarousel />);
export default ControlledCarousel;