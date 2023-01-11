import React from "react";
import "./SectionSix.css";
import logoIcon from "../../Assets/Images/logo.png";
import { FaLongArrowAltRight } from "@react-icons/all-files/fa/FaLongArrowAltRight";
import "aos";

function SectionSix() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12   ">
          <div className="row">
            <div className="col-12">
              <div className="row mt-5" data-aos="fade-up">
                <h3 className="text-center text-win">Win millions in</h3>
                <h1 className="text-center text-prize">prizes</h1>
                <p className="text-center text-para">
                  Provably fair, on-chain games. Win big with PancakeSwap
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-5 sectionSix-responsive ">
            <div
              className="col-lg-5  col-md-12    "
              data-aos="fade-right"
            >
              <div className="cardSix-border">
                <div className="row d-flex justify-content-center ">
                  <div className="col-12  ">
                    <div className="p-1 mt-3  text-center">
                      <img
                        src={logoIcon}
                        className="img-fluid"
                        width={"100px"}
                      />
                    </div>
                    <div className="text-prediction ">Prediction</div>
                    <div className=" text-center text-dollar">$970</div>
                    <div className="text-million ps-5">million</div>
                    <div className="text-center text-title-bnb">
                      BNB + CAKE won so far
                    </div>
                    <div className="text-center text-title-prediction ps-5 pe-5">
                      Predict the price trend of BNB or CAKE to win
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center pt-5 text_amount ms-4">
                    <button className=" d-flex justify-content-start align-items-center btn_playNow_bg">
                      <div className="btn_play_icon_bg text-white d-flex justify-content-center align-items-center ">
                        <FaLongArrowAltRight />
                      </div>
                      <div className=" p-4 btn_playnow">Paly NOW</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-12 "
              data-aos="fade-left"
            >
            <div className="cardSix2-border">
              <div className="row d-flex justify-content-center ">
                <div className="col-12  ">
                  <div className="p-1 mt-3  text-center">
                    <img src={logoIcon} className="img-fluid" width={"100px"} />
                  </div>
                  <div className="text-lottery ">Lottery</div>
                  <div className=" text-center text-dollar-2">$89,407</div>
                  {/* <div className="text-million ps-5">million</div> */}
                  <div className="text-center text-title-bnb pt-4">
                    in CAKE prizes this round
                  </div>
                  <div className="text-center text-title-prediction ps-3 pt-4">
                    Buy tickets with CAKE, win CAKE if your numbers match
                  </div>
                </div>
                <div className=" d-flex justify-content-center pt-5 text_amount ms-4">
                  <button className=" d-flex justify-content-start align-items-center btn_ticket_bg">
                    <div className="btn_play_icon_bg text-white d-flex justify-content-center align-items-center ">
                      <FaLongArrowAltRight />
                    </div>
                    <div className=" p-4 btn_playnow">Buy Tickets</div>
                  </button>
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

export default SectionSix;
