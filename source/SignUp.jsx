//import { Link } from "react-router-dom";
import "../Bootstrap/bootstrap.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from "react";
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'

const SignUp = () => {
    let  navigate = useNavigate();
  const [user, setUser] = useState({
    contact_number: "",
    branch_name : "",
    first_Name: "",
    email_id : "",
    last_Name: "",
    password : "",
    customer_id: "",
    balance : "0.00",
});

    const { contact_number, branch_name, first_Name, email_id, last_Name, password, customer_id, balance} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit=async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8081/api/account/",user);
        navigate("/Dashboard");
    };

    return(
    <div>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel = "stylesheet" href = "css/bootstrap/bootstrap.css"/>
            <link rel = "stylesheet" href="css/fontawesome/css/all.css"/>
            <link rel = "stylesheet" href = "css/default.css"/>
            <title>Register</title>
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
            <form className="form">
    <div class = "d-flex align-items-center justify-content-center">
    <div class="card registration-form-card col-6 bg-transparent border-0">
        {/* <!-- Card Body --> */}
        <div class = "card-body">
            {/* <!-- Form Header --> */}
            <h1 class="form-header card-title mb-3">
            <i class = "fa-edit"></i> Register
            </h1>
            {/* <!-- End of Form Header --> */}

            {/* <!-- Registration Form --> */}
            <form action="" class="reg-form">
            {/* <!-- Row --> */}
            <div class="row">
                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"text"} name = "first_Name" class = "form-control" placeholder = "Enter First Name" 
                    value={first_Name} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"text"} name = "last_Name" class = "form-control" placeholder = "Enter Last Name"
                    value={last_Name} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

            </div>
            {/* <!-- End of Row --> */}
                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"email"} name = "email_id" class = "form-control" placeholder = "Enter Email"
                    value={email_id} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

            {/* <!-- Row --> */}
            <div class="row">
                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"password"} name = "password" class = "form-control" placeholder = "Enter password"
                    value={password} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"text"} name = "customer_id" class = "form-control" placeholder = "Enter Username"
                    value={customer_id} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"tel"} name = "contact_number" class = "form-control" placeholder = "Enter contact number"
                    value={contact_number} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

            </div>
            {/* <!-- End of Row --> */}
            <div className="row">
                {/* <!-- Form Group --> */}
                <div class="form group col">
                    <input type={"number"} name = "balance" class = "form-control" placeholder = "0.00" readOnly
                     value={balance} onChange={(e) => onInputChange(e)}/>
                </div>
                {/* <!-- End of Form Group --> */}

                {/* <!-- Form Group --> */}
                <div class="form group col">
                    {/* <input type="number" name = "balance" class = "form-control" placeholder = "0.00" readOnly
                    value={patientname} onChange={(e) => onInputChange(e)}/> */}
                    <select name="branch_name" class="form-control my-3" id="branch-name"
                        value={branch_name} onChange={(e) => onInputChange(e)}>
                    <option value="">-- Select Branch Name --</option>
                    <option value="Main Branch">Main Branch</option>
                    <option value="Rajouri Garden">Rajouri Garden</option>
                    <option value="Connaught Place">Connaught Place</option>
                    <option value="Greater Kailash">Greater Kailash</option>
                    <option value="Punjabi Bagh">Punjabi Bagh</option>
                    <option value="Rohini">Rohini</option>
                    <option value="Janakpuri">Janakpuri</option>
                    <option value="Karol Bagh">Karol Bagh</option>
                    <option value="Dwarka">Dwarka</option>
                    <option value="Nehru Place">Nehru Place</option>
                    </select>
                </div>
                {/* <!-- End of Form Group --> */}
            </div>
            {/* <!-- Form Group -->  */}
            <div class="form-group col">
                <button class="btn-lg" onClick={(e)=>onSubmit(e)}>Sign Up</button>
            </div>
            {/* <!-- End of Form Group --> */}
                
            </form>
            {/* <!-- End of Registration Form --> */}

            {/* <!-- Card Text --> */}
            <p class="card-text text-white my-2">
                Already have an account? <span class = "ms-2"><a href = "Login" class = "btn btn -sm text-warning">Sign in</a></span>
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
    </div>
    </form>
    </div>
    )
}
export default SignUp;