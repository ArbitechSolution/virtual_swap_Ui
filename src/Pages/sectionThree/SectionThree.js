import React from "react";
import "./SectionThree.css";
import CardIcon from "../../Assets/Images/CardIcon.png";
import logoIcon from "../../Assets/Images/uu3.png";
import TradeIcon from "../../Assets/Images/trader1.png";
import StakeIcon from "../../Assets/Images/stake1.png"
function SectionThree() {
  return (
    <div className="sectionthree_bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row d-flex justify-content-center  space">
              <div className="col-8 mt-5">
                <h2 className="text-heading">
                  Used by millions Trusted with billions
                </h2>
                <div className="text-des">
                  Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
                  eiusmod tempor incididunt
                </div>
                <div className="text-des">
                  Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do
                </div>
              </div>
            </div>
            <div className="row mt-5  d-flex justify-content-between">
              <div className="col-3 card-border">
                <div className="row">
                  <div className="col-12">
                    <div className="circle-bg">
                      <div className="d-flex justify-content-center mt-2">
                        <img
                          src={CardIcon}
                          className="img-fluid"
                          width={"40px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 ">
                    <div className="p-1 text-center">
                      <img
                        src={logoIcon}
                        className="img-fluid"
                        width={"70px"}
                      />
                    </div>
                    <div className=" text-center text-2m">2.1M</div>
                    <div className="text-center  text-title">
                      Users in the last 30 days
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="col-3 card2-border">
                <div className="row">
                  <div className="col-12">
                    <div className="circle-bg1">
                      <div className="d-flex justify-content-center mt-2">
                        <img
                          src={TradeIcon}
                          className="img-fluid"
                          width={"40px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 ">
                    <div className="p-1 text-center">
                      <img
                        src={logoIcon}
                        className="img-fluid"
                        width={"70px"}
                      />
                    </div>
                    <div className=" text-center text-3m">55M</div>
                    <div className="text-center  text-title">
                      Traders in the last 30 days
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 card3-border">
              <div className="row">
                  <div className="col-12">
                    <div className="circle-bg2">
                      <div className="d-flex justify-content-center mt-2">
                        <img
                          src={StakeIcon}
                          className="img-fluid"
                          width={"40px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-12 ">
                    <div className="p-1 text-center">
                      <img
                        src={logoIcon}
                        className="img-fluid"
                        width={"70px"}
                      />
                    </div>
                    <div className=" text-center text-4m">$3.1B</div>
                    <div className="text-center  text-title">
                    Staked in the last 30 days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
