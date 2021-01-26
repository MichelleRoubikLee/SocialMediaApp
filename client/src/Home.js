import React from 'react';
import './home.css';
import Newsfeed from './components/Newsfeed/Newsfeed';


export const Home = (props) => (
  
  <div class="home">
  <div class="home-title">
    <h1>Welcome to PETSTAGRAM! </h1>
    <h2>Your home of all the things!</h2>
    </div>
     
  <Newsfeed />
  </div>


)