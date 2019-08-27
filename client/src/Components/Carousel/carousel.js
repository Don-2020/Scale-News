import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import OpinionBtn from '../Button/OpinionBtn';
import "./carousel.css";
import axios from "axios";

const CarouselCaptionCss={
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  color: "#5f5f5f",
  padding: "10px"
}

class ControlledCarousel extends Component {

    state = {
      news: []
    }

     //axios is calling to the scrape/ the api scrape is executing the code and returning an array with all the news. 
    //with this information we are updating the state
   //the state then triggers the render 
  componentDidMount() {
    axios.get("api/scrape")
      .then(res => {
        this.setState({news: res.data.news});
      });
}

//mapping (for loop) the news and filling the carousel / grabbing position 1,2,3 for array and preparing carousel item with image article title and paragraph and url reference 

    render() {
      const { news } = this.state;
    return (
    <Carousel>

      
      {news.map(article => {
        return <Carousel.Item>
          <a href={article.url} target="_blank">
          <img
            className="d-block w-100"
            src= {article.image}
            alt="First slide"
          /></a>
          <Carousel.Caption style={CarouselCaptionCss}>
            <h3>{article.title}</h3>
            <p>{article.paragraph}</p>

          

            {article.other.map(opinion => {

              let style = {
                backgroundColor: '',
                color:"#ffffff"
              };
              
              if (opinion.pov === 'Right') {
                style.backgroundColor = 'red';
              } else if (opinion.pov === 'Center') {
                style.backgroundColor = 'purple';
              } else {
                style.backgroundColor = 'blue';
              }
              return <OpinionBtn id="1" variant="info" style={style} href={article.url} >{opinion.pov}</OpinionBtn>
            })}
          </Carousel.Caption>
        </Carousel.Item>
      })}
    </Carousel>

    )}
}


// PREVIOUS
// function ControlledCarousel(props) {
//   console.log(">>>>>>>", props);
  
//   return ( <>
//     <Carousel>
//       {props.news.map(article => {
//         return <Carousel.Item>
//           <p></p>
//           <a href={article.url} target="_blank">
//           <img
//             className="d-block w-100"
//             src= {article.image}
//             alt="First slide"
//           /></a>
//           <Carousel.Caption>
//             <h3>{article.title}</h3>
//             <p>{article.paragraph}</p>
//             {/* <p>{article.other}</p> */}

//             {article.other.map(opinion => {

//               let style = {
//                 backgroundColor: ''
//               };
              
//               if (opinion.pov === 'Right') {
//                 style.backgroundColor = 'red';
//               } else if (opinion.pov === 'Center') {
//                 style.backgroundColor = 'purple';
//               } else {
//                 style.backgroundColor = 'blue';
//               }

//               return <OpinionBtn id="1" variant="info" style={style}>{opinion.pov}</OpinionBtn>
            


//             })
            
//             }


//           </Carousel.Caption>
//         </Carousel.Item>
//       })}
//     </Carousel>
//     </>
//   )};

  
export default ControlledCarousel;
