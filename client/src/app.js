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



export default class app extends React.Component {
  state = {
    showModal: false,
    showModalLogin: false,
    news:[]
  }

  componentDidMount(){

    // <div id="block-views-story-id-single-story-block"></div>
   // API call to the scrape route then update the state
   axios.get("api/scrape").then(function(data){

    //this.setState({news: data.news})
    this.setState({news: data.news})
   })
   // this.setState({news: data.news})
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
    return (
      <div>
        <Router>
          <Wtf />
          <Switch>
            {/* routes */}
            {/* <Route exact path="/topics" component={Topics} /> */}
            {/* routes */}
            <Container >
              <Row >
                <Col size="12">
            
                  <Carousel>
                    {this.state.news.map(item => (                      <ControlledCarousel
                      key = {item.id}
                      title = {item.title}
                    />))
                    }
                    
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
                  <Button onClick={this.openModal} variant="danger" size="lg" block>
                    Sign Up</Button>


                  <Button onClick={this.openModalLogin} style={style.loginbtn} variant="secondary" size="lg" block>
                    Log In</Button>
                </div>

                {/* <Col size="6">
             <Button variant="outline-danger" style={style.registerbtn}>Danger</Button>
            
             </Col>
            
             <Col size="6">
             <Button className="" variant="danger">Danger</Button>
           </Col> */}
              </Row>
            </Container>
          </Switch>
        </Router>

        {/* footer */}
        {/* <Row>
         <Col size="4">
         <h1>test1</h1>
         </Col>
         <Col size="4">
         <h1>test1</h1>
         </Col>
         <Col size="4">
         <h1>test1</h1>
         </Col>
       </Row> */}

      </div>
    )
  }
}


//create grid here

// function setModalShow(show) {

// }
// function App() {
//   return (
//     <div>

//       <Router>
//         <Wtf />
//         <Switch>
//           {/* routes */}
//           {/* <Route exact path="/topics" component={Topics} /> */}
//           {/* routes */}
//           <Container >
//             <Row >
//               <Col size="12">
//                 <ControlledCarousel />
//               </Col>
//             </Row>
//             <Row>
//               <Col size="12">
//                 <h1 style={style.test1}>What’s black white and red all over? </h1>
//               </Col>
//             </Row>
//             <Row>
//               <Col size="12">
//                 <h1 style={style.test2}>Your New(s) Media Habit</h1>
//               </Col>
//             </Row>
//             <Row>
//               <MyVerticallyCenteredModal show={this.state.showModal} onHide={() => setModalShow(false)} />

//               <div style={{ width: '100%', margin: '0px 30px', marginLeft: '10%' }} >
//                 <Button variant="danger" size="lg" block>
//                   Sign Up
//   </Button>
//                 <Button style={style.loginbtn} variant="secondary" size="lg" block>
//                   Log In
//   </Button>
//               </div>

//               {/* <Col size="6">
//             <Button variant="outline-danger" style={style.registerbtn}>Danger</Button>

//             </Col>

//             <Col size="6">
//             <Button className="" variant="danger">Danger</Button>
//           </Col> */}
//             </Row>
//           </Container>
//         </Switch>
//       </Router>

//       {/* footer */}
//       {/* <Row>
//         <Col size="4">
//         <h1>test1</h1>
//         </Col>
//         <Col size="4">
//         <h1>test1</h1>
//         </Col>
//         <Col size="4">
//         <h1>test1</h1>
//         </Col>
//       </Row> */}

//     </div>
//   );
// }


// export default App;
