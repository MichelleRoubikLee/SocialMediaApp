import React, {useState} from 'react';
import axios from 'axios';
import Landing from './Landing/Landing.js';
import MyComments from './MyComments/MyComments.js';
import Navbar from './Navbar/Navbar.js';
import Newsfeed from './Newsfeed/Newsfeed.js';
import Profile from './Profile/Profile.js';
import Sidebar from './Sidebar/Sidebar.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Navbar/>
      <Sidebar/>
      <Newsfeed/>
      <Profile/>
      <MyComments/>
    </div>
  );
}

export default App;
