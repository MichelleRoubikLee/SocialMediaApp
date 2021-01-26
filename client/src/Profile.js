import React from 'react';
import { Profiler } from 'react';
import styled from 'styled-components';
// import Profile from './src/components/Profile/Profile';


const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Profile = (props) => (
  <GridWrapper>
    <p>Welcome to Pestagram!</p>
    <p>this is where you will update your profile, picture and about section of your pet!</p>
 {/* <Profile/> */}
    
  </GridWrapper>

)
