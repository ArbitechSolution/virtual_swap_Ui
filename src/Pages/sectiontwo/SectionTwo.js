import React from "react";
import Picture_0ne from "../../Assets/Images/34445-01.png";
import "./SectionTwo.css";
import trade_icon from "../../Assets/Images/Maskgroup2.png"
import Picture_two from "../../Assets/Images/uulogo-01.png"
import AnimationVritual from "../../Assets/finalanimation.mp4"
import VideoLooper from 'react-video-looper'
import Video from "../../Assets/transparent_1.gif"
import { motion } from "framer-motion";

function SectionTwo() {
  return (
    <div className="container">
      <div className="row  d-flex justify-content-center align-items-center mt-5">
        <div className="col-lg-5 col-md-12 d-flex justify-content-center">
        <div className="hover-button"  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <img src={Video}  width={"750px"} className="pic_animation" />
        </div>
        </div>
        <div className="col-lg-6 col-md-12 d-flex" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <div className="row sectionTwo_responsive" >
            <div className="col-12 d-flex justify-content-center flex-column">
              <div className="text_connect_with p-3">connect with</div>
              <div className="text_virtual_bridge p-2 ">
                Virtual Swap & Bridge the Gap
              </div>
              <div className="text-dammy p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </div>
            </div>
            <div   className="col-6 d-flex flex-row bd">
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
