import React from "react";
import "../Bootstrap/bootstrap.css"
import { useNavigate, Link} from "react-router-dom";
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'

const Error = () => {
    const navigate = useNavigate();
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
            <Nav.Link href="Loggedin">Home</Nav.Link>
            <Nav.Link as={Link} to="/Accountdetails">Account Details</Nav.Link>
            <Nav.Link as={Link} to="/Accountsummary">Account Summary</Nav.Link>
            <Nav.Link as={Link} to="/Transactionpage">Transact</Nav.Link>
            <Nav.Link href="Loggedin">Services</Nav.Link>
            <Nav.Link href="Loggedin">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel = "stylesheet" href = "css/bootstrap/bootstrap.css"/>
    <link rel = "stylesheet" href="css/fontawesome/css/all.css"/>
    <link rel = "stylesheet" href="index.css"/>
    
    <body class="d-flex align-items-center justify-content-center">
        
    <div class="card col-4 alert alert-danger border border-danger text-danger card-text">
        <h3 class="card-title text-danger">
            <i class="fa fa-window-close me-2"></i>Error:
        </h3>
            <hr/>
            <div class = "card-body">
                <p class = "card-text">
                    Oops! Transaction Unsuccessful.
                </p>
                <hr/>
                {/* <a href = "" onClick={() => navigate("/Transactionpage")}>
                    <i class = "fa fa-arrow-alt-circle-left me-1"></i> Back
                </a> */}
            </div>
    </div>
</body>
</div>
)
}
export default Error;