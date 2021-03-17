import React from "react";

function Modal() {
  return (
    <>
      <div open="open">
        <div className="modal fade show">
          <div className="modal-dialog">
            <div className="modal-content table-modal">
              <div className="modal-header">
                <h4 className="modal-title m-auto text-light">Mining Table</h4>
                <span type="button" className="close">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.4069 16.2965C33.1019 16.2965 33.6669 15.7315 33.6669 15.0365V10.7548C33.6669 4.3198 29.6502 0.33313 23.2552 0.33313H10.7552C4.32022 0.33313 0.333557 4.3198 0.333557 10.7598V23.2598C0.333557 29.6798 4.32022 33.6665 10.7552 33.6665H23.2602C29.6802 33.6665 33.6669 29.6798 33.6619 23.2548C33.6619 22.5515 33.0902 21.9798 32.3869 21.9798C31.6819 21.9798 31.1119 22.5515 31.1119 23.2548C31.1119 28.3115 28.3269 31.1115 23.2552 31.1115H10.7552C5.68356 31.1115 2.88356 28.3115 2.88356 23.2548V10.7548C2.88356 5.68313 5.68356 2.88313 10.7602 2.88313H23.2602C28.3336 2.88313 31.1169 5.66646 31.1169 10.7548V14.9915V14.9948C31.1186 15.6981 31.6886 16.2665 32.3919 16.2665V16.2965H32.4069ZM13.3583 18.9088L12.2183 20.0488C11.71 20.5321 11.6817 21.3338 12.155 21.8521L12.1917 21.8788C12.6783 22.3655 13.4617 22.3788 13.9633 21.9088L15.0983 20.7738C15.6133 20.2938 15.6417 19.4871 15.1617 18.9705C14.68 18.4571 13.8733 18.4271 13.3583 18.9088ZM22.2376 21.672C21.7476 22.1603 20.9559 22.1703 20.4543 21.692L20.3909 21.6303L12.4243 13.6653C11.9376 13.1487 11.9276 12.3453 12.4026 11.8187C12.8893 11.3203 13.6859 11.3103 14.1843 11.797C14.1893 11.8003 14.1926 11.8037 14.1976 11.8087L17.3059 14.9186L20.1343 12.0887C20.6426 11.6037 21.4443 11.6087 21.9476 12.1003C22.0376 12.1903 22.1143 12.292 22.1726 12.4053C22.4609 12.907 22.3776 13.537 21.9693 13.947L19.1526 16.762L22.2159 19.827C22.7326 20.3153 22.7526 21.1303 22.2626 21.6453C22.2588 21.651 22.2539 21.6556 22.2489 21.6604C22.2451 21.664 22.2412 21.6677 22.2376 21.672Z"
                      fill="white"
                      className="close-svg"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="modal-body p-0 table-responsive">
                <div className="ps">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="text-primary-gradient">Level</th>
                        <th className="text-primary-gradient">Number Of Tokens</th>
                        <th className="text-primary-gradient">Yield in 24 hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pt-2 pt-sm-4"></td> <td></td> <td></td>
                      </tr>
                      <tr>
                        <td>1</td> <td>5 000 000</td> <td>1 TRX - 0.019 APE</td>
                      </tr>
                      <tr>
                        <td>2</td> <td>4 500 000</td> <td>1 TRX - 0.018 APE</td>
                      </tr>
                      <tr>
                        <td>3</td> <td>4 000 000</td> <td>1 TRX - 0.017 APE</td>
                      </tr>
                      <tr>
                        <td>4</td> <td>3 500 000</td> <td>1 TRX - 0.016 APE</td>
                      </tr>
                      <tr>
                        <td>5</td> <td>3 000 000</td> <td>1 TRX - 0.015 APE</td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="ps__rail-x"
                    style={{ left: "0px", bottom: "0px" }}
                  >
                    <div
                      className="ps__thumb-x"
                      tabindex="0"
                      style={{ left: "0px", width: "0px" }}
                    ></div>
                  </div>
                  <div className="ps__rail-y" style={{ top: "0px", right: "0px" }}>
                    <div
                      className="ps__thumb-y"
                      tabindex="0"
                      style={{ top: "0px", height: "0px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="modal-backdrop fade border-0 backdrop-show"
          ></button>
        </div>
      </div>
    </>
  );
}

export default Modal;
