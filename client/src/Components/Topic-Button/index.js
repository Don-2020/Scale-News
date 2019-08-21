import React from "react";
import topicScrape from "topicRoutes";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button() {
  return (
    <div className="button">
      <Button variant="primary" size="lg">
        {props.name}
      </Button>
    </div>
    <span onClick={() => props.addArticles(prop.link)}className="scrape"></span>

  );
}

export default Button;