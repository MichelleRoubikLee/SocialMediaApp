import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Navbar/NavigationBar';
import {Home} from './Home';
import {LandingPage} from './components/Landing/LandingPage';
import MyComments from './components/MyComments/MyComments';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path = "/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
