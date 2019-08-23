import React from "react";
// import topicScrape from "topicRoutes";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button() {
  return (
    <div className="button">
      <Button onclick="location.href='props.URL'" variant="primary" size="lg">
        {props.Topic}
      </Button>
    </div>
    // <span onClick={() => props.addArticles(prop.link)}className="scrape"></span>

  );
}

export default Button;