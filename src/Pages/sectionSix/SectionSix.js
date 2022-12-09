import React from "react";
import "./SectionSix.css";

function SectionSix() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row mt-5">
            <h3 className="text-center text-win">Win millions in</h3>
            <h1 className="text-center text-prize">prizes</h1>
            <p className="text-center text-para">
              Provably fair, on-chain games. Win big with PancakeSwap
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between mt-5">
      <div className="col-5 cardSix-border">
                <div className="row">
                  <div className="col-12">
                    <div className="circle-bg1">
                      <div className="d-flex justify-content-center mt-2">
                        {/* <img
                          src={TradeIcon}
                          className="img-fluid"
                          width={"40px"}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center ">
                  <div className="col-12 ">
                    <div className="p-1 text-center">
                      {/* <img
                        src={logoIcon}
                        className="img-fluid"
                        width={"70px"}
                      /> */}
                    </div>
                    <div className=" text-center text-3m">55M</div>
                    <div className="text-center  text-title">
                      Traders in the last 30 days
                    </div>
                  </div>
                </div>
              </div>
      <div className="col-5 border border-dark"></div>
      </div>
    </div>
  );
}

export default SectionSix;
