import React from "react";
import {Link} from "react-router-dom"
// import topicScrape from "topicRoutes";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  return (
    // // <div className="button">
    //   {/* <Link to={props.link}> */}
   
    //   {/* <Button  variant="primary" size="lg">
    //     {props.name}
    //   </Button> */}
    //   {/* </Link> */}
   
    // // <span onClick={() => props.addArticles(prop.link)}className="scrape"></span>

    <button>{props.name} {props.link}</button>

  );
}

export default Button;