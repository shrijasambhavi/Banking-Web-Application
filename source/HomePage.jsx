import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return(
    <div>
        <Navbar bg="light" expand="lg">
        {/* <a class="navbar-brand" href="/"> */}
      <div class="logo-image">
            <Image src = {logo}/>
      </div>
        {/* </a> */}
        <Navbar.Brand href="#home">STL Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
            
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content = "IE=edge"/>
            <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
            <link rel = "stylesheet" href = "css/bootstrap/bootstrap.css"/>
            <link rel = "stylesheet" href="css/fontawesome/css/all.css"/>
            <link rel = "stylesheet" href="css/default.css"/>
            <title>Home</title>
            <body class = "d-flex align-items-center">
            <div id = "sample-text-card" class = "card col-6 bg-transparent border-0">
            <div class = "card-body">
                <h1 class = "mb-3">STL Bank</h1>
                <h5 class="card-title">
                    Flexible Banking Solutions
                </h5>
                <p class = "card-text">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                     officia deserunt mollit anim id est laborum.
                </p>
                <div class="button-wrapper d-flex align-items-center ">
                   <a href ="SignUp" class ="btn btn-md register" role="button">Register</a>
                   <a href ="Login" class ="btn btn-md login" role="button">Login</a>
                </div>
            </div>
    </div>
    
</body>
    </div>
    )
}

export default HomePage;