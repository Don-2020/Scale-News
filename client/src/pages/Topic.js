import React from "react"


class Topic extends Component {
    state = {
        search: "",
        topics: [],
        results: [],
        error: "",
    };

    componentDidMount() {
        handleInputChange = event => {
            this.setState({ search: event.target.value })
        };

        handleFormSubmit = event => {
            event.preventDefault();
            
        }
    }
}