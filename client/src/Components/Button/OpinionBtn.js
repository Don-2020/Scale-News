import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function OpinionBtn({ type = "default", className, children, onClick, style, href }) {
    // console.log('BUTTON STYLE', style);
    return (
        <a href={href} target="_blank">
            <button onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")} style={style} >
                {children}
            </button>
        </a>
    );
}

export default OpinionBtn;



//   ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);