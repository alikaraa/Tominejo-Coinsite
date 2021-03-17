import React, { useState } from "react";
import { NavLink } from "react-router-dom"

function Dashboard() {
  // const [change, setChange] = useState(100);
  const [hour,setHour] = useState(0.000)
  const [day,setDay] = useState(0.000)
  const [onday,setonDay] = useState(0.00)

  const onChange = (e) => {
    let inputVal = e.target.value
    let dayVal = inputVal * 0.1
    let hourVal = inputVal * 0.002
    let ondayVal = inputVal * 0.0005
    setDay(dayVal)
    setHour(hourVal)
    setonDay(ondayVal)

  };

  return (
    <div className="container">
      <div className="row">
        <div id="staking" class="col-lg-6 col-md-8 mx-auto card-width">
          <div className="card card-stake card-height card-stake first-card">
            <div className="d-flex align-items-center mb-4 icon-container balance">
              <div className="card-header-image position-relative pb-0">
                <div className="trx-icon stake-icon-content">
                  <img src="./images/tominejo.png" className="stake-icon" alt="bird" />
                </div>
                <span className="card-header-text  bg-transparent font-weight-bold text-white">
                  Stake TRX
                </span>
              </div>
            </div>
            <form method="POST" className="card-body text-center">
              <p className="title-text font-weight-bold">
                Stake TRX to mine APE
              </p>
              <fieldset className="form-group w-100">
                <div className="d-flex w-100">
                  <label className="mb-0 text-small font-weight-bold text-uppercase">
                    ENTER THE AMOUNT
                  </label>
                  <span className="ml-auto text-small mb-1">Min: 100 TRX</span>
                </div>
                <div className="content content-bordered input-group">
                  <input
                    onChange={(event) => onChange(event)}
                    type="number"
                    placeholder="100"
                    className="form-control input-amount fz-18"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent border-0 text p-0 mb-0 font-weight-bold fz-18">
                      TRX
                    </span>
                  </div>
                </div>
              </fieldset>
              <h4 className="text profitability">Profitability:</h4>
              <div className="w-100">
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      Per Hour:
                    </span>
                  </div>
                  <span
                    className="col fz-18 text-right"
                  >
                   {hour} APE
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </span>
                </div>
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      Per Day:
                    </span>
                  </div>
                  <div className="col fz-18 text-right">
                    <span>
                    
                     {day} APE

                    </span>
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </div>
                </div>
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      Per 10 Days:
                    </span>
                  </div>
                  <div className="col fz-18 text-right">
                    {onday} APE
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn withdraw-btn-pd stake-btn text-white py-3 px-4 mt-2 mb-3 mb-sm-4 text-uppercase "
              >
                STAKE TRX
              </button>
              <NavLink
                to="/"
                className="btn gradient-border withdraw-btn fz-16 mb-3 mt-5 mb-sm-4 fin-stats"
              >
                Financial Statistics
              </NavLink>
            </form>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 mx-auto card-width">
          <div className="card card-stake card-height card-liberti">
            <div className="card-header-image position-relative icon-container balance-light">
              <div className="trx-icon stake-icon-content-second">
                <img src="./images/tominejo.png" className="stake-icon mr-0" alt="bird" />
              </div>
              <span className="card-header-text bg-transparent font-weight-bold">
                Mining Dashboard
              </span>
            </div>
            <div className="card-body text-center">
              <p className="fz-24 mt-3 mb-3 mb-sm-4 you-stake">
                <b>Your stake: 0 TRX</b>
              </p>
              <small>*10% fee on unstaking</small>
              <button
                type="button"
                className="btn btn-link fz-12 mb-3 text-uppercase"
              >
                UNSTAKE TRX
              </button>
              <div className="w-100 mt-4">
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center bg-cyan-light">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      Per Hour:
                    </span>
                  </div>
                  <div className="col fz-18 text-right">
                    0.0000 APE
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </div>
                </div>
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center bg-cyan-light">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      Per Day:
                    </span>
                  </div>
                  <div className="col fz-18 text-right">
                    0.0000 APE
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </div>
                </div>
                <div className="content content-bordered py-2 mb-2 row no-gutters align-items-center bg-cyan-light">
                  <div className="col col-auto">
                    <span className="input-group-text bg-transparent border-0 p-0 mb-0 font-weight-bold fz-18">
                      Per 10 Days:
                    </span>
                  </div>
                  <div className="col fz-18 text-right">
                    0.0000 APE
                    <small className="d-block text-cyan"> ≈ $0.00 </small>
                  </div>
                </div>
              </div>
              <div className="content bg-cyan text-white mt-3 ape-balance-content">
                <span className="fz-20 text-white">Pending Reward:</span>
                <span className="fz-20 mb-0 font-weight-bold">0.0000 APE</span>
              </div>
              <button
                type="button"
                className="btn withdraw-btn-pd text-white py-3 px-4 mt-2 mb-3 mb-sm-4 text-uppercase green-hover"
              >
                CLAIM REWARD
              </button>
              <div className="line"></div>
              <NavLink
                to="/"
                className="text-info-gradient gradient-border mb-3 mb-sm-4 p-0 withdraw-btn fz-16 text-orange text-uppercase"
              >
                WITHDRAWAL STATISTICS
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
