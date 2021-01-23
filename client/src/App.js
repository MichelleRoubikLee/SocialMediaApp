import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from './config/config';
import Landing from './components/Landing/Landing.js';
import MyComments from './components/MyComments/MyComments.js';
import Navbar from './components/Navbar/Navbar.js';
import Newsfeed from './components/Newsfeed/Newsfeed.js';
import Profile from './components/Profile/Profile.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [currentUser, setCurrentUser] = useState();
    


    return (
        <div className="App">
        <Landing/>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <Newsfeed/>
        {/* <Profile/> */}
        {/* <MyComments/> */}
        </div>
    );
}


export default App;
