import React from "react";
import connection_icon from "../../Assets/Images/connection_icon.png";

function Ref_List() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5 mb-5">
        <div className="col-md-12 mt-5">
          <div className="row d-flex align-items-center">
            <div className="col-md-12">
              <div>
                <button className="btn-ref-list">Referral LIst</button>
                <button className="btn-ref-list">Farms</button>
                <button className="btn-ref-list">Pools</button>
                <button className="btn-ref-list">Trade Mining</button>
              </div>
            </div>
            <div className="col-md-12">
              <div className="waitDash-box">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                    <div className="d-flex  align-items-center text_amount mt-5 ">
                      <button className=" d-flex justify-content-start align-items-center btn_connect_bg">
                        <div className="btn_connect_icon_bg p-2">
                          <img src={connection_icon} className="img-fluid " />
                        </div>
                        <div className=" btn_connection_wallet">
                          Connect Wallet
                        </div>
                      </button>
                    </div>
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

export default Ref_List;
