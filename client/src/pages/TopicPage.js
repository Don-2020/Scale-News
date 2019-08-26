import React from "react";
import Button from "../Components/Topic-Button"
import axios from 'axios';
import ControlledCarousel from "../Components/Carousel/carousel";
import { Container, Row, Col } from "../Components/Grid";
import Carousel from 'react-bootstrap/Carousel';



class TopicPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            topic: null,
            isReady: false,
            error: null
        }

        

        console.log('INSIDE TOPIC PAGE COMPONENT: PROPS', this.props);
        // document.body.append("<button type='button'>Click Me!</button>");

        // this.popup = document.createElement("button");
        // document.body.appendChild(this.popup);
        
        // var g = document.createElement('div');
        // g.setAttribute("id", "list");
        // document.body.appendChild(g);
        // let buttons =""
        // for(var x=0; x < topics.length; x++){
        //     let tempButton = '<a href="{link}">{text}</a>';
        //     buttons+= tempButton.replace('{link}',topics[x].url).replace("",topics[x].Topic);
        // }
        
        // document.getElementById().innerHTML = buttons;
        // document.getElementById("List").innerHTML = '<button type="button">Click Me!</button>';
        

    }

    handleClick = (url) =>{
        alert("suppose to request data releveant to titel");
        axios.get(url).then(result =>{
            console.log(result)
            this.setState({topic: result})
        }).catch(err => console.log(err))
    }


    // method componentDidMount in which you perform your scrape (res)
    componentDidMount() {
        axios.get("api/topics/scrape")
            .then((result) => {
                this.setState({
                    topics: result.data,
                    isReady: true
                })

                // once topicArray obtained... setState({topics: res.data})
                // console.log(topics)
            }).catch(error => {
                if (error) this.setState({ error })
            })
    }

    // addArticle = URL => {
    //     const articles = this.state.articles.filter(artcle =>)
    // }

    // Then map over topics array and create a button for each element in your array (i.e. a button with topicNeat and URL) which are sent as props to each button
    render() {
        const { topics } = this.state;
        console.log(topics)
        console.log("Topics length:", topics.length)
        return (
            // <div><h1>THIS IS WORKING</h1></div>
            <div className="container">
                <div className="Jumbotron-fluid text-center">
                    <h1>Topic Choices</h1>
                    <h3>Select up to 1 to view</h3>
                </div>
                {this.state.topics.map(topic => (
                    <Button
                        name={topic.Topic}
                        link={topic.URL}
                        scrapeData={this.handleClick}
                    />
                ))}
            </div>
        )
    }
}


export default TopicPage