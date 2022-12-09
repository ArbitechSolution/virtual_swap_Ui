import React from "react";
import "./SectionFour.css";
import Picture_0ne from "../../Assets/Images/34445-01.png";
import connection_icon from "../../Assets/Images/connection_icon.png";

function SectionFour() {
  return (
    <div>
      <div className="container">
        <div className="row  mt-5">
          <div className="col-5 d-flex justify-content-center">
            <img src={Picture_0ne} className="img-fluid" />
          </div>
          <div className="col-6 d-flex ">
            <div className="row">
              <div className="col-12 d-flex justify-content-center flex-column">
                <div className="p-2">
                  <div className="text_trade-anything">Trade Anything</div>
                  <div className="text_no"> <b>No Registration</b></div>
                  <div className="text_trade-anything">No Hassle</div>
                </div>
                <div className="text-dammy p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. 
                </div>
              </div>
              <div className="col-6 d-flex flex-row bd-highlight">
                <div class="">
                  <div className=" align-items-center text_amount ms-4">
                    <button className=" d-flex justify-content-start align-items-center btn_connect_bg">
                      <div className="btn_connect_icon_bg p-2">
                        <img
                          src={connection_icon}
                          className="img-fluid"
                          width={"30px"}
                        />
                      </div>
                      <div className=" btn_connection_wallet">
                        Connect Wallet
                      </div>
                    </button>
                  </div>
                </div>
                <div class="">
                  <div className="  align-items-center text_amount ms-4">
                    <button className="btn_learn_bg">
                        LEARN MORE
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

export default SectionFour;
