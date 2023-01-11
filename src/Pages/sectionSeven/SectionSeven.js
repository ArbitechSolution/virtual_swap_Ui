import React from "react";
import "./SectionSeven.css";
import Picture_0ne from "../../Assets/Images/34445-01.png";
import trade_icon from "../../Assets/Images/Maskgroup2.png";
import Video from "../../Assets/transparent_1.gif"

function SectionSeven() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center marign-seven">
          <div className="col-lg-5 col-md-12 d-flex justify-content-center ">
          <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={Video}  width={"750px"} className="pic_animation" />
        </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className="row">
              <div className="col-12 d-flex justify-content-center flex-column">
                <div className="p-2 text-virtual-world">
                  <div className="">Virtual Swap</div>
                  <div className=""> Makes Our World</div>
                  <div className="">Go Round.</div>
                </div>
                <div className="text-dammy2 p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. 
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <div class="">
                  <div className=" align-items-center text_amount ms-4">
                    <button className=" d-flex justify-content-start align-items-center btn_trade_bg">
                      <div className="btn_trade_icon_bg p-2">
                        <img
                          src={trade_icon}
                          className="img-fluid"
                          width={"30px"}
                        />
                      </div>
                      <div className="btn_trade ps-3">Trade Now</div>
                    </button>
                  </div>
                </div>
                <div class="">
                  <div className="  align-items-center text_amount ms-4">
                    <button className="btn_lear_bg">LEARN MORE</button>
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

export default SectionSeven;
