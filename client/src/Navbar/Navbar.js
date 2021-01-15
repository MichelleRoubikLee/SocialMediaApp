import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './navBar.css'

function NavBar(props){

    return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className='col-md-4' onClick={props.returnHome()}>Petstagram</Navbar.Brand>
                <Navbar.Brand className='col-md-4' onClick={props.returnProfile()}>Profile</Navbar.Brand>
                <Navbar.Brand className='col-md-4' onClick={props.returnLogOut()}>Log out</Navbar.Brand>
                <Navbar.Brand className='col-md-4' onClick={props.returnNewsFeed()}>News feed</Navbar.Brand>
                <Button onClick={props.returnHome()}>HOME</Button>
                <Button onClick={props.goToProfile()}>PROFILE</Button>
                <Button onClick={props.logOut()}>LOG OUT</Button>
                <Button onClick={props.goToNewsFeed()}>NEWS FEED</Button>
            </Navbar>
    )
};

export default NavBar;