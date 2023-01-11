import React from 'react'
import { FiEdit } from "@react-icons/all-files/fi/FiEdit";
import "./SectionEight.css"
import connection_icon from "../../Assets/Images/connection_icon.png"

function SectionEight() {
  return (
    <div className="container">
    <div className="row margin-eight  " data-aos="fade-up"
     data-aos-anchor-placement="center-center"> 
      <div className="col-lg-12 col-md-12 d-flex justify-content-center">
        <div className="row d-flex-justify-content-center align-items-center box1   box-12">
          <div className="col-lg-7 col-md-12 justify-content-center ms-5   sectionEight-responsive ">
            {/* <div className="text-virtual">Virtual Swap</div> */}
            <div className="text-start">Start in seconds</div>
            <div className="text-connect">Connect your crypto wallet to start using theapp in seconds. 
</div> 
<div className='text-danger'>No registration needed.</div>
          </div>
          <div className="col-lg-3">
          <div className="d-flex align-items-center  justify-content-center">
              <button className="d-flex justify-content-start align-items-center btn_connecteigth_bg">
                <div className="btn_connecteight_icon_bg p-4 text-white">
                 <img src={connection_icon} className="img-fluid"/>
                </div>
                <div className=" btn_connect_eight ms-1">Connect wallet</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SectionEight