import React from "react";

import Wtf from "./Components/Navbar/navbar"
import ControlledCarousel from "./Components/Carousel/carousel"
import { Container, Row, Col } from "./Components/Grid";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from './style'
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./Components/Modal/modal"
// import Topics from './pages/Topic';




export default class app extends React.Component {
  state = {
    showModal: false
  }
  openModal = () => {
    this.setState({ showModal: true })
  }

  setModalShow = boolean => {
    this.setState({ showModal: boolean });
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
                  <ControlledCarousel />
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

                <div style={{ width: '100%', margin: '0px 30px', marginLeft: '10%' }} >
                  <Button onClick={this.openModal} variant="danger" size="lg" block>
                    Sign Up</Button>


                  <Button onClick={this.openModal} style={style.loginbtn} variant="secondary" size="lg" block>
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
