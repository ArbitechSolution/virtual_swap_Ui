import React from "react";
import W_Navbar from "../W_Navbar";
import "./Prediction.css";
import rightArrow from "../../../Assets/Images/Win/right-arrows3.png";
import YellowBar from "../../../Assets/Images/Win/Group11.png";
import PinkBar from "../../../Assets/Images/Win/Rectangle264.png"

function Prediction() {
  return (
    <div className="container">
      <W_Navbar />
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="row d-flex justify-content-between">
            <div className="col-md-3 Prediction-box1">
              <div className="row mt-3">
                <div className="d-flex justify-content-between">
                  <div className="pred-circle">
                    <div className="pt-1">Live</div>
                  </div>
                  <div className="t-Pred me-2">#97323</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <div className="payout-bg d-flex justify-content-between">
                    <div className="up-bg">
                      <div className="p-2">up</div>
                    </div>
                    <div className="t-payout text-center p-2">211x Payout</div>
                  </div>
                </div>
              </div>
              <div className="row  mt-4 d-flex justify-content-center">
                <div className="col-md-10 pred-rectangle">
                  <div className="row mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="t-last">
                        <div>Last Price</div>
                        <div className="t-pred-prices">$3.8484</div>
                      </div>
                      <div className="Pred-btn-bg d-flex justify-content-between">
                        <div className="pred-icon-bg">
                          <div className="p-2">
                            {" "}
                            <img src={rightArrow} className="img-fluid" />
                          </div>
                        </div>
                        <div className="t-btn-pred text-center p-2">
                          0.473964
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-12 d-flex justify-content-between border border-primary">
                      <div className="t-lock">Locked Price :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between border border-primary">
                      <div className="t-lock">Prize Pool :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center ">
                <div className="btn-down">
                  <div className="t-btn p-2 ms-3 ">
                    Down &nbsp; I &nbsp; 2.33xPayout
                  </div>
                </div>
              </div>
              <div className="row d-flex-justify-content-center">
                <img src={YellowBar} className="p-0" width={"371px"} />
              </div>
            </div>
            <div className="col-md-3 Prediction-box2">
              <div className="row mt-3">
                <div className="d-flex justify-content-between">
                  <div className="pred-circle2">
                    <div className="pt-1">Expired</div>
                  </div>
                  <div className="t-Pred2 me-2">#97323</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <div className="payout-bg2 d-flex justify-content-between">
                    <div className="up-bg2">
                      <div className="p-2">up</div>
                    </div>
                    <div className="t-payout2 text-center p-2">211x Payout</div>
                  </div>
                </div>
              </div>
              <div className="row  mt-4 d-flex justify-content-center">
                <div className="col-md-10 pred-rectangle2">
                  <div className="row mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="t-last">
                        <div>Last Price</div>
                        <div className="t-pred-prices2">$3.8484</div>
                      </div>
                      <div className="Pred-btn-bg2 d-flex justify-content-between">
                        <div className="pred-icon-bg2">
                          <div className="p-2">
                            {" "}
                            <img src={rightArrow} className="img-fluid" />
                          </div>
                        </div>
                        <div className="t-btn-pred text-center p-2">
                          0.473964
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-3">
                    <div className="col-md-12 d-flex justify-content-between border border-primary">
                      <div className="t-lock">Locked Price :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between border border-primary">
                      <div className="t-lock">Prize Pool :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center ">
                <div className="btn-down2">
                  <div className="t-btn p-2 ms-3 ">
                    Down &nbsp; I &nbsp; 2.33xPayout
                  </div>
                </div>
              </div>
              <div className="row d-flex-justify-content-center">
                <img src={PinkBar} className="p-0" width={"371px"} />
              </div>
            </div>
            <div className="col-md-3 Prediction-box3">
              <div className="row mt-3">
                <div className="d-flex justify-content-between">
                  <div className="pred-circle3">
                    <div className="pt-1">Next</div>
                  </div>
                  <div className="t-Pred3 me-2">#97323</div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <div className="payout-bg3 d-flex justify-content-between">
                    <div className="up-bg3">
                      <div className="p-2">up</div>
                    </div>
                    <div className="t-payout3 text-center p-2">211x Payout</div>
                  </div>
                </div>
              </div>
              <div className="row  mt-4 d-flex justify-content-center">
                <div className="col-md-10 pred-rectangle3">
                  <div className="row mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="t-last">
                        Prize Pool :
                      </div>
                      <div className="t-pred-prices3 text-white">9.846 VS</div>
                      {/* <div className="Pred-btn-bg d-flex justify-content-between">
                        <div className="pred-icon-bg">
                          <div className="p-2">
                            {" "}
                            <img src={rightArrow} className="img-fluid" />
                          </div>
                        </div>
                        <div className="t-btn-pred text-center p-2">
                          0.473964
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center ">
                  <div className="btn-blue mt-3">
                  Enter Up
                  </div>
                  <div className="btn-blue mt-3">
                  Enter Down
                  </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center ">
                <div className="btn-down3">
                  <div className="t-btn p-2 ms-3 ">
                    Down &nbsp; I &nbsp; 2.33xPayout
                  </div>
                </div>
              </div>
              {/* <div className="row d-flex-justify-content-center">
                <img src={YellowBar} className="p-0" width={"371px"} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
