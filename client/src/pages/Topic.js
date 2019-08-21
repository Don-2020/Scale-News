import React from "react";
import Button from "../Components/button"


class Topic extends React.Component {
    // include state here that has property:value topics: []
    state = {
        topics: []
    };

    // method componentDidMount in which you perform your scrape (res)
    componentDidMount() {
        axios.get("api/topics/scrape")
            .then((data) => {
                console.log("Somethign app.js: " + data)

                // once topicArray obtained... setState({topics: res.data})
                this.setState({ topics: data.topic })
            })
    }

    addArticle = URL => {
        const articles = this.state.articles.filter(artcle =>)
    }

    // Then map over topics array and create a button for each element in your array (i.e. a button with topicNeat and URL) which are sent as props to each button
    render() {
        return (
            <div className="container">
                <div className="Jumbotron">
                    <h1>Topic Choices</h1>
                    <h3>Select up to 5 to view</h3>
                </div>
                {this.state.topics.map(topic => (
                    <Button
                        name={topic.Topic}
                        link={topic.URL}
                    />
                ))}
                <Button

                />
            </div>
        )
    }
}


export default Topic