import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'

function Accountdetails() {
  const  navigate = useNavigate();
  const {customer_id} =useParams();
  let location = useLocation();
  console.log(location.state);
  // const customer_id = location.state;
  console.log(customer_id);
  const [transferData, setTransferData] = useState([]);
  // const [selectedAccount, setSelectedAccount] = useState(null);
  // const navigate = useNavigate();
  
  useEffect(() => {
    // let customer_id = "bhuvenka"
    axios.get(`http://localhost:8081/api/account/${customer_id}`, { 
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        setTransferData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [customer_id]);
  
  const onSubmit=async (e) => {
    e.preventDefault();
    navigate('/Transactionpage',
  {
      state: {
          customer_id : customer_id
      }
  });  
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
            <Nav.Link href="Loggedin">Home</Nav.Link>
            <Nav.Link as={Link} to="/Accountdetails">Account Details</Nav.Link>
            <Nav.Link as={Link} to="/Accountsummary">Account Summary</Nav.Link>
            <Nav.Link as={Link} to="/Transactionpage">Transact</Nav.Link>
            <Nav.Link href="Loggedin">Services</Nav.Link>
            <Nav.Link href="Loggedin">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <div className="container my-5">
      <h1 className="text-center text-white mb-5">Account Details</h1>
      <table className="table table-hover table-striped table-bordered bg-white bg-opacity-50">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Contact Number</th>
            <th>Account Number</th>
            <th>Branch Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Account Balance</th>
            <th>Email ID</th>
            <th>Last Name</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          {transferData.map((transfer, index) => (
            <tr key={transfer.account_id}>
              <td>{transfer.account_id}</td>
              <td>{transfer.contact_number}</td>
              <td>{transfer.account_number}</td>
              <td>{transfer.branch_name}</td>
              <td>{transfer.customer_id}</td>
              <td>{transfer.password}</td>
              <td>{transfer.balance}</td>
              <td>{transfer.email_id}</td>
              <td>{transfer.last_Name}</td>
              <td>{transfer.first_Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={(e)=>onSubmit(e)}>Transact</button>
    </div>
    </div>
  );
}

export default Accountdetails;
