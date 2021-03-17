import React from "react";
import { NavLink } from "react-router-dom"


function Footer() {


  const InputCopy = () => {
    /* Get the text field */
    var copyText = document.getElementById("foo");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center mb-sm-5 ">
            <h2 className="title pt-5">Referral Program</h2>
          </div>
        </div>
        <div className="col-12 referal-program">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="py-sm-5 h-100">
                <p className="ref-prog-text ">
                  You can earn APE by inviting new users to the project get 10%
                  APE from the total APE mined by your referrals
                </p>
                <label className="fz-16 ">Your link:</label>
                <div className="copy-link-box">
                  <div className="input-group py-0 pr-0">
                    <input
                      value="https://tomitron.com"
                      id="foo"
                      placeholder="https://tomitron.com"
                      type="text"
                      readonly="readonly"
                      className="form-control ape-control fz-16"
                    />
                    <div className="input-group-append">
                      <button
                        onClick={InputCopy}
                        className="btn btn-primary withdraw-btn withdraw-btn-pd py-3 m-0 px-4 mr-n1 mb-custom text-uppercase green-hover font-helvetica"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ml-auto text-center">
              <div className="py-5 h-100">
                <p className="text text-cyan text-bold fz-24 font-helvetica mb-3 mb-sm-4">
                  Available Rewards: 0 APE
                </p>
                <button
                  type="button"
                  className="btn btn-primary withdraw-btn withdraw-btn-pd py-3 px-4 mb-custom text-uppercase green-hover font-helvetica"
                >
                  CLAIM REWARD
                </button>
                <p className="text mb-3 mb-sm-4 staking-text font-helvetica">
                  Total Referrals: 0
                </p>
                <NavLink
                  to="/"
                  className="text-info-gradient gradient-border withdraw-btn text-orange mt-2 fz-16 text-uppercase mb-0 pt-0 pb-1 font-helvetica"
                >
                  Statistics
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
