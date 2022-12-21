import React from "react";
import W_Navbar from "../W_Navbar";
import "./Latest.css";
import connectICon from "../../../Assets/Images/connection_icon.png";
import Picture from "../../../Assets/Images/34445-01.png";
import Score from "./Score";
import TopRate from "./TopRate";
import PrizeByTeam from "./PrizeByTeam";
import Rules from "./Rules";
function Latest() {
  return (
    <div>
      <div className="W_bg">
        <W_Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row mt-5  d-flex align-items-center">
                <div className="col-md-8  mt-5  align-items-center">
                  <div className="T-WDate">May 17-24, 2022</div>
                  <div className="t-box">Mines of DALARNIA</div>
                  <div className="t-Trading">TRADING COMPETITION</div>
                  <div className="t-Prizes">$120,000 in Prizes</div>
                  <div className="t-with">with Tokens and NFTs!</div>
                  <div className="t-compete">
                    Compete with other teams for the highest trading volume!
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
                <div className="col-md-4">
                  <img src={Picture} className="img-fluid" height={"742px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************************************************************ */}
      <Score />
      <TopRate />
      <PrizeByTeam />
      <Rules />
    </div>
  );
}

export default Latest;
