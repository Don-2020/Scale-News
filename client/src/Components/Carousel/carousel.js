import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

function ControlledCarousel(props) {
  console.log(">>>>>>>", props);
  
  return ( <>
    <Carousel>
      {props.news.map(article => {
        return <Carousel.Item>
          <p></p>
          <img
            className="d-block w-100"
            src= {article.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{article.title}</h3>
            <p>{article.paragraph}</p>
            {/* <p>{article.other}</p> */}

            {article.other.map(opinion => {
              return <Button variant="info">{opinion.pov}</Button>

            })
            
            }


          </Carousel.Caption>
        </Carousel.Item>
      })}
    </Carousel>
    </>
  )};

  // render(<ControlledCarousel />);
export default ControlledCarousel;
