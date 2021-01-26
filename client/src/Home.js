import React from 'react';
import './home.css';
import Newsfeed from './components/Newsfeed/Newsfeed';


export const Home = (props) => (
  
  <div className="home">
  <div className="home-title">
    <p>This is a paragraph and I am writing on the home page</p>
    </div>
     
  <Newsfeed />
  </div>


)