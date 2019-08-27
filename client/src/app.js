import React from "react";

import Wtf from "./Components/Navbar/navbar"
import ControlledCarousel from "./Components/Carousel/carousel"
import { Container, Row, Col } from "./Components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from './style'
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./Components/Modal/modal"
// import Topics from './pages/Topic';
import ModalLogin from "./Components/Modal1/modal1"
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'
import TopicPage from './pages/TopicPage'
import home from './pages/Home'

// TO DO: =================================================
// Will need to consider when and where topics page will be loaded. Currently state contains full topicsArray when App component mounts. When ready, you will pass state of topicsArray as prop to TopicPage component.

// import TopicPage from '../src/pages/TopicPage'
// <TopicPage topics={this.state.topicsArray}/>
// ========================================================
let proxy = () => {
  var cors_api_host = 'https://cors-anywhere.herokuapp.com/';
  var cors_api_url = cors_api_host + '/';
  var slice = [].slice;
  var origin = window.location.protocol + '//' + window.location.host;
  var open = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    var args = slice.call(arguments);
    var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
    if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
      targetOrigin[1] !== cors_api_host) {
      args[1] = cors_api_url + args[1];
    }
    return open.apply(this, args);
  };
}
proxy();
export default class app extends React.Component {
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


    // axios.get("/api/topics/scrape")
    //   .then(res => {
    //     console.log('THIS IS WORKING****************');
    //     console.log(res.data.topicsArray);
    //     this.setState({
    //       topicsArray: res.data.topicsArray
    //     });
    //   })

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


  render() {
    console.log('CURRENT STATE', this.state)


    return (

      <div>

        <Router>
          <Wtf />
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/Home" component={home}/>
            <Route exact path="/Topics" component={TopicPage}/>
          </Switch>
        </Router>

        <footer>
          <row>
            <Col size="4">
              <h1 style={{ color: 'white' }}>h</h1>
            </Col>
            <Col size="4">
              <h1 style={{ color: 'white' }}>e</h1>
            </Col>
            <Col size="4">
            <h1 style={{ color: 'white' }}>llo</h1>
            </Col>
       </row> 
       </footer>
   
      </div>
        )
      }
    }
    