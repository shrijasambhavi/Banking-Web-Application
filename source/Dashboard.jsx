import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './SignUp';
import { useNavigate, useLocation } from 'react-router-dom';



function Dashboard() {
  let  location = useLocation();
  console.log(location.state);

  return (
    <>
      <header className="main-page-header mb-3 bg-primary">
        <div className="container d-flex align-items-center">
          <div className="company-name">STL Bank</div>
          <nav className="navigation">
                {/* <a href="" className="text-white ms-2">Dashboard</a> */}
                {/* <a href="" className="text-white ms-2">Payment History</a> */}
                <a href="Accountsummary" className="text-white ms-2">Transaction History</a>
          </nav>
          <div className="display-name ms-auto text-white ms-2">
            <i className="fa fa-circle text-success me-2"></i>
            Welcome: <span>John Doe</span>
          </div>
          <a href="" className="btn btn-sm text-white ms-2">
            <i className="fas fa-sign-out-alt" aria-hidden="true"></i> Sign Out
          </a>
        </div>
      </header>

      <div className="container d-flex">
        <button onClick= {SignUp} id="add-account-btn" className="btn btn-md shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          Add New Account
        </button>

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
            <option value="payment">Third party Transfer</option>
          </select>
          

        <div>
          <div className="card payment-card">
            <div className="card-body">
            <div className="form-group mb-2">
              <label for="">From Account</label>
              <input type = "text" name="account_number" class="form-control" placeholder="Enter your Account Number"/>
            </div>

            <div className="form-group mb-2">
              <label for="">To Account</label>
              <input type = "text" name="account_number" class="form-control" placeholder="Enter the  Account Number"/>
            </div>

            <div class = "form-group mb-2">
              <label for="">Select Account</label>
              <select name = "account_id" class = "form-control" id="">
                <option value="">-- Select Account --</option>
              </select>
            </div>

            <div className="form-group mb-2">
              <label for="">Enter amount to pay</label>
              <input type = "text" name="payment_amount" class="form-control" placeholder="Enter the  Account Number"/>
            </div>

            <div className="form-group mb-2">
              <button id="" class="btn btn-md transact-btn">Pay</button>
              </div>
            </div> 
        </div>
        
        </div>       
        
      </div>
      
      </div>


      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          Accounts Form Container
        </div>
      </div>

    <script src="src/js/main.js"></script>

      <div className="container d-flex py-3">
        <h2 class = "me-auto">Total Accounts Balance:</h2>
        <h2 class="ms-auto">0.00</h2>
      </div>
      <div class="container">
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="card no-accounts-card">
    <div className="card-body">
      <h1 class="card-title text-black">
        <i class="fas fa-ban text-danger"></i> No Registered Accounts
      </h1>
      <hr/>
      <div className="card-text">
        You dont have any accounts right now. 
      </div>

      <button id="add-account-btn" className="btn btn-md shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          Add New Account
      </button>

    </div>
  </div>
</div>
    </>
  );
}

export default Dashboard;
