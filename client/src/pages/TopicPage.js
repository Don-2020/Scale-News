import React from "react";
// import Button from "../Components/button"
import axios from 'axios';

class TopicPage extends React.Component {
    constructor(props) {
        super(props)

        console.log('INSIDE TOPIC PAGE COMPONENT: PROPS', this.props) 
        // -> { icon: 'home', … }
        // include state here that has property:value topics: []
        
    }
    

    // method componentDidMount in which you perform your scrape (res)
    // componentDidMount() {
    //     axios.get("api/topics/scrape")
    //         .then((data) => {
    //             console.log("Somethign app.js: " + data)

    //             // once topicArray obtained... setState({topics: res.data})
    //             this.setState({ topics: data.topic })
    //         })
    // }

    // addArticle = URL => {
    //     const articles = this.state.articles.filter(artcle =>)
    // }

    // Then map over topics array and create a button for each element in your array (i.e. a button with topicNeat and URL) which are sent as props to each button
    render() {
        return (
            // <div><h1>THIS IS WORKING</h1></div>
            <div className="container">
                <div className="Jumbotron">
                    <h1>Topic Choices</h1>
                    <h3>Select up to 1 to view</h3>
                </div>
                {/* {this.state.topics.map(topic => (
                    <Button
                        name={topic.Topic}
                        link={topic.URL}
                    />
                ))} */}
            </div>
        )
    }
}


export default TopicPage