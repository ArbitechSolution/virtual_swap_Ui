import React from "react";
import "./Lottery.css";
import bluecircle from "../../../Assets/Images/bluecircle.png";
import pinkcircle from "../../../Assets/Images/pinkcircle.png";
import yellowcircle from "../../../Assets/Images/yellowCircle.png";
import Cd from "../../../Assets/Images/CdFrame.png";
function PrizeFunds() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row d-flex justify-content-around">
            <div className="col-md-6 PrizeFund-box">
              <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-7   justify-content-center align-items-center">
                  <div className="tDigits ">DIGITS MATCHED</div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={bluecircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>
                    &nbsp; Matches first 1
                  </div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={pinkcircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>{" "}
                    &nbsp; Matches first 2
                  </div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={yellowcircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>
                    &nbsp; Matches first 3
                  </div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={bluecircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>
                    &nbsp; Matches first 4
                  </div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={pinkcircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>
                    &nbsp; Matches first 5
                  </div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={yellowcircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>
                    &nbsp; Matches all 6
                  </div>
                  <div className="tmatches ">
                    <span>
                      <img
                        src={bluecircle}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </span>
                    &nbsp; Burn Pool
                  </div>
                </div>
                <div className="col-md-5  ">
                  <div className="tDigits ">PRIZE POOL ALLOCATION</div>
                  <div className="tmatches blue-col ">2%</div>
                  <div className="tmatches  pink-col ">3%</div>
                  <div className="tmatches yellow-col ">5%</div>
                  <div className="tmatches blue-col  ">10%</div>
                  <div className="tmatches pink-col ">20%</div>
                  <div className="tmatches  yellow-col ">40%</div>
                  <div className="tmatches  blue-col ">20%</div>
                </div>
              </div>
              <div className="text-center mt-3">
                <img src={Cd} className="img-fluid" width={"240px"} />
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="t-prizes-fund">Prize Funds</div>
              <div className="t-thePrize">
                The prizes for each lottery round come from three sources:
              </div>
              <div className=" ms-3 p-1 mt-4">
                <div className="t-ticket">Ticket Purchases</div>
                <div>
                  <img src={bluecircle} className="img-fluid" width={"16px"} />{" "}
                  &nbsp;
                  <span className="t-here-an">
                    Here’s an example lottery draw, with two tickets, A and B.
                    Ticket Purchases
                  </span>
                </div>
                <div className="t-Rollover mt-4">Rollover Prizes</div>
                <div>
                  <img src={pinkcircle} className="img-fluid" width={"16px"} />{" "}
                  &nbsp;
                  <span className="t-here-an">
                    Here’s an example lottery draw, with two tickets, A and B.
                    Ticket Purchases
                  </span>
                </div>
                <div className="t-cake mt-4">CAKE Injections</div>
                <div>
                  <img
                    src={yellowcircle}
                    className="img-fluid"
                    width={"16px"}
                  />{" "}
                  &nbsp;
                  <span className="t-here-an">
                    Here’s an example lottery draw, with two tickets, A and B.
                    Ticket Purchases
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeFunds;
