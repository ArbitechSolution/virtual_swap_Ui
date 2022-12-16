import React from "react";
import W_Navbar from "../W_Navbar";
import "./Prediction.css";
import rightArrow from "../../../Assets/Images/Win/right-arrows3.png";
import YellowBar from "../../../Assets/Images/Win/Group11.png";
import PinkBar from "../../../Assets/Images/Win/Rectangle264.png";
import faceIcon from "../../../Assets/Images/Win/uu8.png";
import Icon from "../../../Assets/Images/Win/Group 13.png";
import Icon2 from "../../../Assets/Images/Win/Group 14.png";
import Icon3 from "../../../Assets/Images/Win/Group 15.png";

function Prediction() {
  return (
    <div className="container">
      <W_Navbar />
      <div className="row mt-5 mb-5">
        <div className="col-md-12">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8 Prediction-box">
              <div className="row d-flex justify-content-between">
                <div className="col-md-5 d-flex justify-content-between align-items-center">
                  <div>
                    <img src={faceIcon} className="img-fluid" width={"40px"} />
                  </div>
                  <div className="t-VSUSD">VSUSD</div>
                  <div className="t-VSUSD1">$3.8484</div>
                </div>
                <div className="col-md-5 d-flex justify-content-between align-items-center">
                  <div className="time-box">
                    <div className="t-time-box text-center mt-1">
                      4:58 <span className="t-5m">5m</span>
                    </div>
                  </div>
                  <div>
                    <img src={Icon3} className="img-fluid" width={"36px"} />
                  </div>
                  <div>
                    <img src={Icon2} className="img-fluid" width={"36px"} />
                  </div>
                  <div>
                    <img src={Icon} className="img-fluid" width={"36px"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-between">
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
                    <div className="col-md-12 d-flex justify-content-between ">
                      <div className="t-lock">Locked Price :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between  ">
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
                    <div className="col-md-12 d-flex justify-content-between ">
                      <div className="t-lock">Locked Price :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between ">
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
                      <div className="t-last">Prize Pool :</div>
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
                    <div className="btn-blue mt-3">Enter Up</div>
                    <div className="btn-blue mt-3">Enter Down</div>
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
          <div className="row mt-5 d-flex justify-content-between">
            <div className="col-md-3 Prediction-box1">
              <div className="row mt-3">
                <div className="d-flex justify-content-between">
                  <div className="pred-circle">
                    <div className="pt-1">Live</div>
                  </div>
                  <div className="t-Pred me-2">#97323</div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-12 d-flex justify-content-end">
                  <div className="payout-bg d-flex justify-content-between">
                    <div className="up-bg">
                      <div className="p-2">up</div>
                    </div>
                    <div className="t-payout text-center p-2">211x Payout</div>
                  </div>
                </div>
              </div> */}
              <div className="row  mt-5 d-flex justify-content-center">
                <div className="col-md-10 pred-rectangle mt-5">
                  <div className="row d-flex justify-content-end mt-3">
                    <div className="col-md-3  me-3">
                      <button className="btn-up">Up</button>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="tentry text-center">Entry Start</div>
                    <div className="t-time">8:45</div>
                  </div>
                  <div className="row d-flex justify-content-end mt-3">
                    <div className="col-md-3  me-3">
                      <button className="btn-up">Down</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row d-flex-justify-content-center mt-5">
                <img src={YellowBar} className="p-0" width={"371px"} />
              </div> */}
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
                    <div className="col-md-12 d-flex justify-content-between">
                      <div className="t-lock">Locked Price :</div>
                      <div className="t-price2 me-3">$3.8484</div>
                    </div>
                    <div className="col-md-12 d-flex justify-content-between">
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
                      <div className="t-last">Prize Pool :</div>
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
                    <div className="btn-blue mt-3">Enter Up</div>
                    <div className="btn-blue mt-3">Enter Down</div>
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
