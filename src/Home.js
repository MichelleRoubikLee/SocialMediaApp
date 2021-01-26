import React from 'react';
import styled from 'styled-components';
// import Newsfeed from './components/Newsfeed/Newsfeed';
import Landing from './components/Landing/Landing';
import Newsfeed from './components/Newsfeed/Newsfeed'
import Profile from './components/Profile/Profile';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
    <p>This is a paragraph and I am writing on the home page</p>
    <p>This is another paragraph, hi hey hello whatsup yo</p>
    <Newsfeed />
    <Landing/>
    <Profile/>
  </GridWrapper>
)