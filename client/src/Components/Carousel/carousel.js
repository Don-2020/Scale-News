import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import OpinionBtn from '../Button/OpinionBtn';
import "./carousel.css";

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

              let style = {
                backgroundColor: ''
              };
              
              if (opinion.pov === 'Right') {
                style.backgroundColor = 'red';
              } else if (opinion.pov === 'Center') {
                style.backgroundColor = 'purple';
              } else {
                style.backgroundColor = 'blue';
              }

              return <OpinionBtn id="1" variant="info" style={style}>{opinion.pov}</OpinionBtn>
            


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
