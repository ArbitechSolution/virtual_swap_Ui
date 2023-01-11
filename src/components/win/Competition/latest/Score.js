import React from "react";
// import "./Latest.css";
import connectICon from "../../../../Assets/Images/connection_icon.png";
import facePicture from "../../../../Assets/Images/Win/uu16.png";

function Score() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6 ">
        <div className="Latest-box">
          <div className="row d-flex justify-content-center">
            <div className="title-box">Your Score</div>
          </div>
          <div className="row">
            <div className="col-md-8 ">
              <div className="t-check ms-3">check your rank</div>
              <div className="t-connect-view ms-3 ">Connect wallet to view</div>
              <div className="text_amount ms-3 mt-2">
                <button className=" d-flex justify-content-start align-items-center btn_Fgird_bg">
                  <div className="btn_fgird_icon_bg p-2">
                    <img
                      src={connectICon}
                      className="img-fluid"
                      width={"30px"}
                    />
                  </div>
                  <div className="btn_Fgird ps-3">Connect wallet</div>
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="text-center">
                <img
                  src={facePicture}
                  className="img-fluid facePicture"
                  width={"180px"}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Score;
