import React from "react";
import Wtf from "../Components/Navbar/navbar"
import ControlledCarousel from "../Components/Carousel/carousel"
import { Container, Row, Col } from "../Components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';
import style from './style.js';
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../Components/Modal/modal"
import ModalLogin from "../Components/Modal1/modal1"



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

    openModal = () => {
        this.setState({ showModal: true })
      }
    
      openModalLogin = () => {
        this.setState({ showModalLogin: true })
      }
      setModalShow = boolean => {
        this.setState({ showModal: boolean });
      }
    
      setModalLoginShow = boolean => {
        this.setState({ showModalLogin: boolean });
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
                                <ControlledCarousel />
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                    <Col size="12">
                        <h1 style={style.test1}>What’s black white and red all over? </h1>
                    </Col>
                    </Row>
                    <Row>
                    <Col size="12">
                        <h1 style={style.test2}>Your New(s) Media Habit</h1>
                    </Col>
                    </Row>
                    <Row>

                        
                    <MyVerticallyCenteredModal show={this.state.showModal} onHide={() => this.setModalShow(false)} />

                    <ModalLogin show={this.state.showModalLogin} onHide={() => this.setModalLoginShow(false)} />

                    <div style={{ width: '100%', margin: '0px 30px', marginLeft: '10%' }} >
                        <Button style={{}} onClick={this.openModal} variant="danger" size="lg" block>
                        Sign Up</Button>


                        <Button id="logIn" onClick={this.openModalLogin} style={style.loginbtn} variant="secondary" size="lg" block>
                        Log In</Button>
                    </div>

                    </Row>
                </Container>
            </Router>
        )
    }
}