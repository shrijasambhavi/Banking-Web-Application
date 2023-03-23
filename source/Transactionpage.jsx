import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'
import { useState } from "react";

function Transactionpage() {
  const  navigate = useNavigate();
  const location = useLocation();
  const customerId = location.state.customer_id;
  const [user, setUser] = useState({
    from_account: "ACC-00009",
    to_account : "ACC-00001",
    transfer_amount: "234.00",
    transaction_type : "credit",
});
const { from_account, to_account, transfer_amount, transaction_type, } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit=async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8081/api/transfer/transfer",user)
      // navigate("/Dashboard");
      .then(response => {
        console.log("Transaction Successful");
      })
      .catch(error => {
        console.error(error);
        navigate("/Error"); 
      });
  };

    return (
        <>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel = "stylesheet" href = "css/bootstrap/bootstrap.css"/>
        <link rel = "stylesheet" href="css/fontawesome/css/all.css"/>
        <link rel = "stylesheet" href = "css/default.css"/>
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
      <div className="container d-flex">
        <button id="transact-btn" className="btn ms-auto btn-md shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          Transact
        </button>
      </div>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">Transact</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <small class="card-text">
              Choose an option below
          </small>

          <select name="transact-type" class="form-control my-3" id="transact-type">
            <option value="">-- Select Transaction Type --</option>
            <option value="transfer">Transfer</option>
            {/* <option value="payment">Third party Transfer</option> */}
          </select>
          
        <div>
          <div className="card payment-card">
            <div className="card-body">
            <div className="form-group mb-2">
              <label for="">From Account</label>
              <input type = {"text"} name="account_number" class="form-control" placeholder="Enter your Account Number"
              value={from_account} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="form-group mb-2">
              <label for="">To Account</label>
              <input type = {"text"} name="account_number" class="form-control" placeholder="Enter the Account Number"
              value={to_account} onChange={(e) => onInputChange(e)}/>
            </div>

            <div class = "form-group mb-2">
              <label for="">Select Account</label>
              <select name = "account_id" class = "form-control" id="">
                <option value="">-- Select Account --</option>
              </select>
            </div>

            <div className="form-group mb-2">
              <label for="">Enter amount to pay</label>
              <input type = "text" name="payment_amount" class="form-control" placeholder="Enter the  Account Number"
              value={transfer_amount} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="form-group mb-2">
              <button id="" class="btn btn-md transact-btn btn-success" onClick={(e)=>onSubmit(e)}>Pay</button>
              </div>
            </div> 
        </div>
        
        </div>       
        
      </div>
      
      </div>
        </>
    );
}export default Transactionpage;