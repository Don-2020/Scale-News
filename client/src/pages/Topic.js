import React from "react";
import Button from "../Components/button"

function Topic() {
    return (
        <div>
            <div className="Jumbotron">
                <h3>Topic</h3>
            </div>
            <div className="container">
                <Button name={this.state.name} handleBtnClick={this.handleBtnClick}
                />
            </div>
        </div>
    )
}

export default Topic