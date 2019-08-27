import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavNews from "./Components/Navbar/navbar"
import {Col} from "./Components/Grid";

// import Topics from './pages/Topic';

import TopicPage from './pages/TopicPage'
import home from './pages/Home'
import login from './Components/Modal1/loginmodal'
// TO DO: =================================================
// Will need to consider when and where topics page will be loaded. Currently state contains full topicsArray when App component mounts. When ready, you will pass state of topicsArray as prop to TopicPage component.

// import TopicPage from '../src/pages/TopicPage'
// <TopicPage topics={this.state.topicsArray}/>
// ========================================================

//the real "home" is the app. this is where the template is. Th


export default class App extends React.Component {

  render() {
    console.log('CURRENT STATE', this.state)


    return (

      <div>
        <NavNews />

        <Router>
          <Switch>
            <Route exact path="/login" component={login} />
            <Route exact path="/" component={home} />
            <Route exact path="/Home" component={home} />
            <Route exact path="/Topics" component={TopicPage} />
          </Switch>

        </Router>

        <footer>
          <row>
            <Col size="4">
              <h1 style={{ color: 'white' }}>h</h1>
            </Col>
          
            
          </row>
        </footer>

      </div>
    )
  }
}
