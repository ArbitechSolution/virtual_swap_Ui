import React from "react";
import "./SectionOne.css";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit";
import Picture_0ne from "../../Assets/Images/34445-01.png";

function SectionOne() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="row d-flex-justify-content-center align-items-center box1" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
            <div className="col-lg-7 col-md-6 justify-content-center ms-5 section-one-responsive">
              <div className="text-virtual">Virtual Swap</div>
              <div className="text-virtual-swap">Hello Virtual Swap Team!</div>
              <div className="d-flex align-items-center get_touch">
                <button className="d-flex justify-content-start align-items-center btn_get_bg">
                  <div className="btn_edit_bg p-2 text-white">
                    <FiEdit />
                  </div>
                  <div className=" btn_get_touch ms-3">Get in Touch</div>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 image_set">
              <div className="img-bg">
                <img src={Picture_0ne} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
