import React from "react";
import "./SectionFive.css";
import TradeIcon from "../../Assets/Images/Rectangle19.png"
import Picture from "../../Assets/Images/34445-01.png"

function SectionFive() {
  return (
    <div className="sectionFive-bg">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-3 mt-5">
            <div className="row d-flex align-items-center">
              <div className="col-6    mt-5">
                <div className="text-earn">
                  Earn Passive Income With Crypto.
                </div>
                <div className="text-title-earn">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </div>
                <div class="d-flex justify-content-start mb-5 mt-3">
                  <div class="">
                    <div className="d-flex  align-items-center text_amount">
                      <button className=" d-flex justify-content-start align-items-center btn_Tbg">
                        <div className="btn_Ticon_bg p-2 ">
                          <img src={TradeIcon} className="img-fluid" />
                        </div>
                        <div className=" btn_trade ms-3">
                        Trade Now
                        </div>
                      </button>
                    </div>
                  </div>
                  <div class="ms-4">
                      <button className="btn-Lmore">
                      Learn More
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src={Picture} className="img-fluid" width={"500px"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
