import React from "react";
import "./Pottery.css";
import BlueCircle from "../../../Assets/Images/bluecircle.png";
import PinkCircle from "../../../Assets/Images/pinkcircle.png";
import YellowCircle from "../../../Assets/Images/yellowCircle.png";
import CdFarme from "../../../Assets/Images/CdFrame.png";
function Split() {
  return (
    <div className="Split-bg">
      <div className="container mt-5">
        <div className="row How-card-margin">
          <div className="col-md-12  mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-5 ">
                <div className="Split-box">
                  <div className="row ">
                    <div className="col-md-12 p-3">
                      <div class="d-flex justify-content-between bd-highlight mt-3 p-2">
                        <div class=" T-SplitPrize">
                          <img
                            src={BlueCircle}
                            className="img-fluid"
                            width={"16px"}
                          />
                          &nbsp; Prize Pool
                        </div>
                        <div class=" t-Percentage">2%</div>
                      </div>
                      <div class="d-flex justify-content-between bd-highlight">
                        <div class="p-2 T-SplitPrize">
                          <img
                            src={PinkCircle}
                            className="img-fluid"
                            width={"16px"}
                          />{" "}
                          &nbsp; Rewards
                        </div>
                        <div class="p-2 t-Percentage2">3%</div>
                      </div>
                      <div class="d-flex justify-content-between bd-highlight">
                        <div class="p-2 T-SplitPrize">
                          <img
                            src={YellowCircle}
                            className="img-fluid"
                            width={"16px"}
                          />
                          &nbsp; Fees
                        </div>
                        <div class="p-2 t-Percentage3">5%</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <img src={CdFarme} className="img-fluid" width={"200px"} />
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
              <div className="t-SplitBreak"> Split Breakdown</div>
              <div className="t-the-prize">The prizes for each lottery round come from three sources:</div>
              <div className="mt-3">
              <div className="t-Sprize">Prize Pool (80%)</div>
              <div className="t-split-here"><img src={BlueCircle} className="img-fluid" width={"12px"}/> &nbsp; &nbsp; Here’s an example lottery draw, with two tickets, A and B.
Ticket Purchases</div>
              </div>
              <div className="mt-3">
              <div className="t-Sreward">Rewards (20%)</div>
              <div className="t-split-here"><img src={PinkCircle} className="img-fluid" width={"12px"}/> &nbsp; &nbsp; Here’s an example lottery draw, with two tickets, A and B.
Ticket Purchases</div>
              </div>
              <div className="mt-3">
              <div className="t-Sfees">Fees (8%)</div>
              <div className="t-split-here"><img src={YellowCircle} className="img-fluid" width={"12px"}/> &nbsp; &nbsp; Here’s an example lottery draw, with two tickets, A and B.
Ticket Purchases</div>
              </div>
              
              
              </div>
            </div>
          </div>
          <div className="t-since-the mb-5">Since the rewards from lock-staking are only distributed at the end of the duration, the prize pool to be distributed in each of the 10 weeks upon deposit is borrowed from the CAKE treasury based on the estimated APY. The rewards at the end of the duration from the deposit will be used to repay the treasury and to distribute the 20% staking rewards. Because the APY may change over the duration based on other deposits and their lock-periods in the lock CAKE pool, there may be a small deviance from the above percentages specified (+/- 10%). But, ultimately all staking rewards net of the Pottery fees will be returned to depositors through prize pool or rewards -- the expected value is the same.</div>
        </div>
      </div>
    </div>
  );
}

export default Split;
