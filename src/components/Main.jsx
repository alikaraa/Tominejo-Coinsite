import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import FooterBottom from "./FooterBottom";
import Tomi from "./Tomi"

function Main() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto card-width card-font">
              <div className="card card-wallet">
                <div className="card-body text-center">
                  <div className="card-icon icon-container main-wallet">
                    <i className="fa-2x text-white fas fa-wallet"></i>
                  </div>
                  <p className="card-text mb-1 mt-2">Your Wallet:</p>
                  <p className="mb-4 fz-balance">
                    <button className="btn btn-info btn-connect text-uppercase text-white hover-orange">
                      CONNECT
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mx-auto card-width card-font">
              <div className="card card-balance">
                <div className="card-body text-center">
                  <div className="card-icon icon-container balance">
                    <i className="fas text-white fa-2x fa-chart-bar"></i>
                  </div>
                  <p className="card-text mb-1 mt-2">Wallet balance:</p>
                  <p className="mb-4 fz-balance">----</p>
                </div>
              </div>
            </div>
            <Tomi />

            <Dashboard />

            <Footer />
            <FooterBottom />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
