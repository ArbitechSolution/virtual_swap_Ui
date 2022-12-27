import React from "react";
import connectICon from "../../../Assets/Images/connection_icon.png";
import "./Pottery.css";

function CurPrize() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12 col-xl-12 ">
          <div className="row">
            <div className="col-md-6 border border-primary">
              <div className="curPrize-box">
                <div className="row d-flex justify-content-end me-2">
                  <div className="btn-CurPrize">
                    <button type="button" className="btn-deposit">
                      Deposit
                    </button>
                    <button type="button" className="btn-deposit">
                      Claim
                    </button>
                  </div>
                </div>
                <div className="row d flex-judtify-content-center align-items-center">
                  <div className="col-md-12 col-lg-12 p-5">
                    <div className="tPottery">Pottery</div>
                    <div className="tstakeCake">
                      Stake CAKE, Earn CAKE, Win CAKE
                    </div>
                    <div className="Cur-input mt-2">
                      <div className="d-flex justify-content-between  bd-highlight mt-1">
                        <div className="p-3 T-your">YOURDEPOSIT</div>
                        <div className="p-3 cur-tPrice">
                          0.000<span className="cur_usd">~0.00 USD</span>
                        </div>
                      </div>
                    </div>
                    <div className="Cur-input mt-2">
                      <div className="d-flex justify-content-between  bd-highlight mt-1">
                        <div className="p-3 T-your">APY</div>
                        <div className="p-3 cur-tPrice">876</div>
                      </div>
                    </div>
                    <div className="Cur-input mt-2">
                      <div className="d-flex justify-content-between  bd-highlight mt-1">
                        <div className="p-3 T-your">Next draw date</div>
                        <div className="p-3 cur-tPrice">6d : 18h : 33m</div>
                      </div>
                    </div>
                    <div className="Cur-input mt-2">
                      <div className="d-flex justify-content-between  bd-highlight mt-1">
                        <div className="p-3 T-your">Total Value Locked </div>
                        <div className="p-3 cur-tPrice">234,881.93 VS</div>
                      </div>
                    </div>
                    <div className="Cur-input mt-2">
                      <div className="d-flex justify-content-between  bd-highlight mt-1">
                        <div className="p-3 T-your">Max. deposit cap</div>
                        <div className="p-3 cur-tPrice">870,000.00 VS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-lg-6 order border-primary">
              <div className="t-current-prize">Current Prize Pot</div>
              <div className="tcur_usd">$18,174</div>
              <div className="tcur_stake">Stake to get your tickets NOW</div>
              <div className="text_amount mt-2">
                <button className=" d-flex justify-content-start align-items-center btn_Fgird_bg">
                  <div className="btn_fgird_icon_bg p-2">
                    <img
                      src={connectICon}
                      className="img-fluid"
                      width={"30px"}
                    />
                  </div>
                  <div className="btn_Fgird ps-3">Connect wallet</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurPrize;
