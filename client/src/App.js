import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Navbar/NavigationBar';
import {Home} from './Home';
import {Profile} from './Profile';
import {LandingPage} from './components/Landing/LandingPage';
import Newsfeed from './components/Newsfeed/Newsfeed';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar/Sidebar';
import nUser from './components/Profile/nUser'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path = "/home" component={Home} />
        <Route path="/nUser" component={nUser} />
        <Route component={NoMatch} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
