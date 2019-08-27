import React from "react";
import ControlledCarousel from "../Components/Carousel/carousel"
import { Container, Row, Col } from "../Components/Grid";
import Carousel from 'react-bootstrap/Carousel';
import style from './style.js';
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../Components/Modal/registermodal"
import ModalLogin from "../Components/Modal1/loginmodal"



// TO DO: =================================================
// Will need to consider when and where topics page will be loaded. Currently state contains full topicsArray when App component mounts. When ready, you will pass state of topicsArray as prop to TopicPage component.

// import TopicPage from '../src/pages/TopicPage'
// <TopicPage topics={this.state.topicsArray}/>
// ========================================================


//this page is controlling the loginbuttons- and is rendering the carousel
export default class Home extends React.Component {
    state = {
        showModal: false,
        showModalLogin: false,
        topicsArray: []
    }
    redirecTotTopic = ()=>{
        console.log("CLICKED")
        // this.props.history.push("/Topics")
        window.location("/Topics")
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

    }



    render() {



        return (



            <Container >

                <Row >
                    <Col size="2"></Col>
                    <Col size="8">

                        <Carousel>
                            <ControlledCarousel />
                        </Carousel>
                    </Col>
                </Row>
                <Row>
                    <Col size="2"></Col>
                    <Col size="8">
                        <h1 style={style.test1}>What’s black white and red all over? </h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="2"></Col>
                    <Col size="8">
                        <h1 style={style.test2}>Your New(s) Media Habit</h1>
                    </Col>
                </Row>
                <Row>
                    <Col size="3"></Col>
                    <Col size="6">

                        <MyVerticallyCenteredModal show={this.state.showModal} onHide={() => this.setModalShow(false)} />

                        <ModalLogin show={this.state.showModalLogin} onHide={() => this.setModalLoginShow(false)} />

                        <div style={{ width: '100%', margin: '0px 30px', marginLeft: '0' }} >
                            <Row>

                                <Col size="6">
                                    <Button style={{}} onClick={this.openModal} variant="danger" size="lg" block>
                                        Sign Up</Button>
                                </Col>

                                <Col size="6">
                                    <Button id="logIn" onClick={this.openModalLogin} style={style.loginbtn} variant="secondary" size="lg" block>
                                        Log In</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}