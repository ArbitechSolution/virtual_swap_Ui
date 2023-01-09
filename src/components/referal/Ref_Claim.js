import React from "react";
import FaceIcon from "../../Assets/Images/Group25.png";
import connection_icon from "../../Assets/Images/connection_icon.png";

function Ref_Claim() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="d-flex justify-content-end mt-5">
          <h2 className="t-claim">Claim History</h2>
        </div>
        <div className="col-md-12 ref-claim-bg">
          <div className="row">
            <div className="col-lg-9 col-md-12 border border-primary">
              <div className="d-flex justify-content-around p-3">
                <div>
                  <h3 className="t-claim-total">Total Friends Invited</h3>
                  <p className="t-claim-value">189,252</p>
                </div>
                <div>
                  <h3 className="t-claim-total">Total Friends Invited</h3>
                  <p className="t-claim-value">189,252</p>
                </div>
                <div>
                  <h3 className="t-claim-total">Total Friends Invited</h3>
                  <p className="t-claim-value">189,252</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 inner-ref-claim-bg">
              <div className=" mt-2 p-3">
                <h3 className="t-unclaimed">Unclaimed Rewards</h3>
                <div>
                  <p className="t-claim-vs">
                    <img src={FaceIcon} className="img-fluid" width={"50px"} />
                    100 VS
                  </p>
                </div>
                <div className="d-flex  align-items-center text_amount mt-3 ">
                  <button className=" d-flex justify-content-start align-items-center btn_connect_bg">
                    <div className="btn_connect_icon_bg p-2">
                      <img src={connection_icon} className="img-fluid " />
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

export default Ref_Claim;
