import React from "react";

import Wtf from "../Components/Navbar/navbar"
import ControlledCarousel from "../Components/Carousel/carousel"
import { Container, Row, Col } from "../Components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'

// TO DO: =================================================
// Will need to consider when and where topics page will be loaded. Currently state contains full topicsArray when App component mounts. When ready, you will pass state of topicsArray as prop to TopicPage component.

// import TopicPage from '../src/pages/TopicPage'
// <TopicPage topics={this.state.topicsArray}/>
// ========================================================

export default class Home extends React.Component {
    state = {
        showModal: false,
        showModalLogin: false,
        news: [],
        topicsArray: []
    }

    componentDidMount() {
        console.log("componenet mounted");
        // <div id="block-views-story-id-single-story-block"></div>
        // API call to the scrape route then update the state
        axios.get("api/scrape")
            .then(res => {

                console.log("back from the scrape")
                console.log(res.data.news);
                console.log(this);

                this.setState({
                    news: res.data.news
                });

            })


        axios.get("/api/topics/scrape")
            .then(res => {
                console.log('THIS IS WORKING****************');
                console.log(res.data.topicsArray);
                this.setState({
                    topicsArray: res.data.topicsArray
                });
            })

    }



    render() {
        console.log('CURRENT STATE', this.state)


        return (

            <Router>

                <Container >

                    <Row >
                        <Col size="12">

                            <Carousel>
                                <ControlledCarousel
                                    news={this.state.news}
                                />
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Router>
        )
    }
}