import React from "react";
import Fsection1 from "./Fsection1";
import Fsection2 from "./Fsection2";
import "./t_finished.css";

function T_finished() {
  return (
    <>
      <div className="finish_bg">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="row d-flex justify-content-center mt-5 mb-5">
                <div className="col-md-9">
                  <h2 className="t-finsished-invest">
                    Invest in The Future of Finance with Pandora
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fsection1 />
      <Fsection2 />
    </>
  );
}

export default T_finished;
