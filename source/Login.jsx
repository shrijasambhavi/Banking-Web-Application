import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'; 
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'

const Login = () => {
  const  navigate = useNavigate();
  const [user, setUser] = useState({
    customer_id: "",
    password : "",
});
const { customer_id, password } = user;

// let history = useHistory();

const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit=async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/api/login/login",user);
    navigate('/Loggedin',
    {
        state: {
            customer_id : customer_id
        }
    });   
    //  let location = useLocation();
    //  console.log(state)
}; 

return (
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <meta charset="UTF-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel = "stylesheet" href = "css/bootstrap/bootstrap.css"/>
      <link rel = "stylesheet" href="css/fontawesome/css/all.css"/>
      <link rel = "stylesheet" href = "css/default.css"/>
      <title>Login</title>
      <div class = "d-flex align-items-center justify-content-center">
{/* <!-- Card: Login Form Card--> */}
<div class="card login-form-card col-4 bg-transparent border-0 d-flex align-items-center justify-content-center">
    {/* <!-- Card Body --> */}
    <div class = "card-body">
        {/* <!-- Form Header --> */}
        <h1 class="form-header card-title mb-3">
        <i class = "fa fa-user-circle"></i> Login
        </h1>
        {/* <!-- End of Form Header --> */}

        {/* <!-- Login Form --> */}
        <form action="" class="login-form">
        
            {/* <!-- Form Group --> */}
            <div class="form group col">
                <input type="text" name = "customer_id" class = "form-control" placeholder = "Enter customer_id" 
                value={customer_id}
                    onChange={(e) =>onInputChange(e)}/>
            </div>
            {/* <!-- End of Form Group --> */}

                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type="password" name = "password" class = "form-control" placeholder = "Enter password"
                    value={password}
                    onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

        {/* <!-- Form Group --> */}
        <div class="form-group col">
            <button class="btn-lg btn-success" onClick={(e)=>onSubmit(e)}>Login</button>
        </div>
        {/* <!-- End of Form Group --> */}
            
        </form>
        {/* <!-- End of Login Form --> */}

        {/* <!-- Card Text --> */}
        <p class="card-text text-white my-2">
            Don't have an account? <a href = "/Signup" class = "btn btn -sm text-warning">Sign Up</a>
        </p>
        {/* <!-- End of Card Text --> */}

        {/* <!-- Back Button to Landing Page --> */}
        <small class="text-warning">
            <i class="fa fa-arrow-alt-circle-left"></i> <a href="/" class = "btn btn-sm text-warning">Back</a>
        </small>
        {/* <!-- End of Back Button to Landing Page --> */}
    </div>
    {/* <!-- End of Card Body --> */}

</div>
{/* // <!-- End of Card: Login Form Card--> */}

</div>
</div>
);
};

export default Login;