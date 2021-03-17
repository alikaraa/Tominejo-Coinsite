import React, {useState , useEffect} from "react";
import Modal from "./Modal"

function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", onClick);
    }
    return () => {
      window.removeEventListener("click", onClick);
    };
  });

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p className="home-text p-5 text-center">STAKE TRX TO MINE APE</p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-4 d-flex flex-column home-total justify-content-center align-items-center align-self-xl-start mt-xl-5 pt-xl-5">
              <p className="text mb-1 text-cyan-dark font-weight-bold">
                Total Staked
              </p>
              <p className="text  home-trx font-weight-bold">0 TRX</p>
            </div>
            <div className="col-xl-4 order-xl-1 col-md-4 order-12 mb-5 text-center position-relative">
              <img src="./images/tominejo.jpg" className="icon-bird" alt="bird" />
            </div>
            <div className="col-xl-4 home-total col-md-4 order-md-5 d-flex text-center flex-column justify-content-center align-items-center align-self-xl-start mt-xl-5 pt-xl-5">
              <p className="text mb-1  text-cyan-dark font-weight-bold">
                Token Value
              </p>
              <p className="text home-trx text-gradient mb-1 font-weight-bold">
                1 APE = 0.00 TRX
              </p>
              <p className="text home-trx text-gradient font-weight-bold">
                1 APE ≈ 0.00 USDT
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center home-font home-total">MINING LEVEL: 1/10</p>
          <div className="pt-3">
          <div class="progress mb-3 mb-sm-4 mx-auto  ">
            <div
              role="progressbar"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
              class="progress-bar progress-bar-custom"
            ></div>
          </div>
          <p className="text-center home-font">LEFT:0 APE</p>
          <div className="text-center">
            <button onClick={onClick}  type="button" className="btn text-white home-btn">MINING TABLE</button>
            
        </div>
          </div>
        </div>
      </div>
      {isOpen ? (
           <Modal />
          ) : (
            null
          )}
    </div>
  );
}

export default Home;
