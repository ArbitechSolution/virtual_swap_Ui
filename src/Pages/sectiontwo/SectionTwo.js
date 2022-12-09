import React from "react";
import Picture_0ne from "../../Assets/Images/34445-01.png";
import "./SectionTwo.css";
import connection_icon from "../../Assets/Images/connection_icon.png"

function SectionTwo() {
  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-5 d-flex justify-content-center">
          <img src={Picture_0ne} className="img-fluid" />
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
                  <button className=" d-flex justify-content-start align-items-center btn_connect_bg">
                    <div className="btn_connect_icon_bg p-2">
                      <img src={connection_icon} className="img-fluid" width={"30px"}/>
                    </div>
                    <div className=" btn_connection_wallet">Connect Wallet</div>
                  </button>
                </div>
              </div>
              <div class="">
                <div className="  align-items-center text_amount ms-4">
                  <button className=" d-flex justify-content-start align-items-center btn_connect_bg">
                    <div className="btn_connect_icon_bg p-2">
                      {/* <img src={connection_icon} className="img-fluid " /> */}
                    </div>
                    <div className=" btn_connection_wallet">Connect Wallet</div>
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
