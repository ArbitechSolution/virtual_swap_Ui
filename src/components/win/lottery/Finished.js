import React from "react";
import connectICon from "../../../Assets/Images/connection_icon.png";
import "./Lottery.css"

function Finished() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row d-flex justify-content-between">
            <div className="col-md-6">
            <div className="Fininshed-box">
              <div className="row  d-flex justify-content-center mt-4">
                <div className="col-md-11 ">
                <div className="row d-flex justify-content-between">
                <div className="col-md-6">
                  <div className="tfinished">Finished Rounds</div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end  p-2">
                    <div className="btn-group-finished">
                      <button className="btn-finish">All History</button>
                      <button className="btn-finish ">Your History</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-5">
                <div className="input-finished">
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="tDrawn">Drawn</div>
                    <div className="tDrawn">Dec 9, 2022, 4:00 AM</div>
                  </div>
                </div>
                <div className="col-md-11 input-finished mt-3">
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="tDrawn">Round</div>
                    <div className="tRound">876</div>
                  </div>
                </div>
              </div>
              <div className="row ms-2">
                <div className="col-md-11 mt-3">
                  <div className="d-flex align-items-center ">
                    <div className="tWinning">Winning Number &nbsp;</div>
                    <div className="t-latest-box">Latest</div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end mt-5">
                <div className="LF-circle">
                  <div className="LT-Detail text-center mt-4">Detail</div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-6  d-flex align-items-center">
              <div className="row d-flex align-items-center">
                <div className="t-connect-your">
                  <b>Connect your wallet to check if you've won!</b>
                </div>
                <div className="text_amount mt-5">
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
    </div>
  );
}

export default Finished;
