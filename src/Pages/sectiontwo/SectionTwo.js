import React from "react";
import Picture_0ne from "../../Assets/Images/34445-01.png";
import "./SectionTwo.css";
import trade_icon from "../../Assets/Images/Maskgroup2.png"

function SectionTwo() {
  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-5 d-flex justify-content-center picture-bg">
        <div className="picture-one">
          <img src={Picture_0ne} className="img-fluid"/>
        </div>
        </div>
        <div className="col-6 d-flex ">
          <div className="row">
            <div className="col-12 d-flex justify-content-center flex-column">
              <div className="text_connect_with p-3">connect with</div>
              <div className="text_virtual_bridge p-2">
                Virtual Swap & Bridge the Gap
              </div>
              <div className="text-dammy p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </div>
            </div>
            <div className="col-6 d-flex flex-row bd-highlight">
              <div class="">
                <div className=" align-items-center text_amount ms-4">
                  <button className=" d-flex justify-content-start align-items-center btn_trade_bg">
                    <div className="btn_trade_icon_bg p-2">
                      <img src={trade_icon} className="img-fluid" width={"30px"}/>
                    </div>
                    <div className="btn_trade ps-3">Trade Now</div>
                  </button>
                </div>
              </div>
              <div class="">
                  <div className="  align-items-center text_amount ms-4">
                    <button className="btn_lear_bg">
                        LEARN MORE
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

export default SectionTwo;
