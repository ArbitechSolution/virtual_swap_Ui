import React from "react";
import "./virtual.css";
import virtual_pic from "../../Assets/Images/virtual_pic.png"
import V_card from "./V_card";

function Virtual_Event() {
  return (
    <>
      <div className="virtual_bg">
        <div className="container">
          <div className="row d-flex just-content-center border border-primary">
            <div className="col-lg-12 col-md-12 mt-5">
              <h1 className="t-hot-event">Hot Event</h1>
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-8 col-md-8 border border-primary mt-5">
                  <div className="virtual_box">
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-12 border border-primary">
                      <div className="m-5">

                        <div className="t-syrup-storm ">Syrup Storm</div>
                        <div className="t-draw-time">
                          Draw time: Nov 9, 2022 10:59 PM (GMT-8)
                        </div>
                      </div>
                      </div>
                      <div className=" col-lg-4 col-md-4 d-flex justify-content-end ">
                      <img src={virtual_pic}  className="virtual_pic" height={"170px"}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <V_card/>
    </>
  );
}

export default Virtual_Event;
