import React from "react";
import "./SectionFive.css";
import TradeIcon from "../../Assets/Images/Rectangle19.png"
import Picture from "../../Assets/Images/34445-01.png"
import Video from "../../Assets/transparent_1.gif"

function SectionFive() {
  return (
    <div className="sectionFive-bg">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-3 mt-5">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-12 mt-5" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="text-earn">
                  Earn Passive Income With Crypto.
                </div>
                <div className="text-title-earn">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </div>
                <div class="d-flex justify-content-start mb-5 mt-3 gap-3  SectionFive_btn_responsive">
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
                  <div class="">
                      <button className="btn-Lmore">
                      Learn More
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
              <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={Video}  width={"750px"} className="pic_animation" />
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
