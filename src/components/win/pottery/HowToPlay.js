import React from "react";
import "./Pottery.css";

function HowToPlay() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12  mt-5">
          <div className="row">
            <div className="text-center t-How-to-play">How to Play</div>
            <div className="text-center t-Deposit-Cake">
              Deposit CAKE to get your Pottery tickets. More CAKE deposited,
              higher the chance of winning <br />
              (and of course, higher the rewards)! Simple!
            </div>
          </div>
          <div className="row d-flex justify-content-center How-card-margin">
            <div className="col-md-4  col-lg-4 col-xl-4 ">
              <div className="How-card1">
                <div className="Hcard1-circle">
                  <div className="mt-2">1</div>
                </div>
                <div className="t-Deposit-vs text-center mt-1 ">
                Deposit VS
                </div>
                <div className="tDeposit m-3">
                Deposit CAKE on the monthly subscription date -- first Monday of each Month. Your chance of winning depends on how many CAKE you deposit compared to the total pool. Your CAKE deposit will be locked for 10 weeks. There will be a monthly TVL cap in the beta product stage.
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
            <div className="How-card2">

              <div className="Hcard2-circle">
                <div className="mt-2">2</div>
              </div>
              <div className="t-wait-for text-center mt-1 ">
              Wait for the Draw
                </div>
                <div className="tDeposit m-3">
                Deposit CAKE on the monthly subscription date -- first Monday of each Month. Your chance of winning depends on how many CAKE you deposit compared to the total pool. Your CAKE deposit will be locked for 10 weeks. There will be a monthly TVL cap in the beta product stage.
                </div>
            </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 ">
            <div className="How-card3">

              <div className="Hcard3-circle">
                <div className="mt-2">3</div>
                
              </div>
              <div className="t-Claim text-center mt-1 ">
                Claim & Withdrawal
                </div>
                <div className="tDeposit m-3">
                Deposit CAKE on the monthly subscription date -- first Monday of each Month. Your chance of winning depends on how many CAKE you deposit compared to the total pool. Your CAKE deposit will be locked for 10 weeks. There will be a monthly TVL cap in the beta product stage.
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
