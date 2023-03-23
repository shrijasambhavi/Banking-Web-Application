import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from '../Images/logo.png'

function Accountsummary() {
  const navigate = useNavigate();
  const location = useLocation();
  // const customerId = location.state.customer_id;
 
  const [transferData, setTransferData] = useState([]);
  // const [accountId, setAccountId] = useState('');
  
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8081/api/account/summary/${customer_id}`)
  //     .then((response) => {
  //       setAccountId(response.data.account_number);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [customerId]);

  const downloadPdf = () => {
    let accountnumber = "ACC-00009";
    axios
      .get(`http://localhost:8081/api/transfer/${accountnumber}/pdf`)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "account_summary.csv");
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error(error);
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
      <h1 className="text-center text-white mb-5">Account Summary</h1>
      <table className="table table-hover table-striped table-bordered bg-white bg-opacity-50">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>From Account</th>
            <th>To Account</th>
            <th>Transfer Amount</th>
            <th>Transfer Date</th>
            <th>Transfer Time</th>
            <th>Transaction Type</th>
          </tr>
        </thead>
        <tbody>
          {
            transferData.map((transfer, index) => (
              <tr key={index+1}>
                <td>{transfer.transfer_transaction_id}</td>
                <td>{transfer.from_account}</td>
                <td>{transfer.to_account}</td>
                <td>{transfer.transfer_amount}</td>
                <td>{transfer.transfer_date}</td>
                <td>{transfer.transfer_time}</td>
                <td>{transfer.transaction_type}</td>
              </tr>
            ))
          }     
        </tbody>
      </table>
       <div>
      {/* <label htmlFor="accountId">Account ID:</label> */}
      {/* <input type="text" id="accountId" value={accountId} onChange={(e) => setAccountId(e.target.value)} /> */}
      <button className="btn btn-primary btn-lg" onClick={downloadPdf}>
        Download
      </button>
    </div>
    </div>
    </div>
  );
}

export default Accountsummary;
