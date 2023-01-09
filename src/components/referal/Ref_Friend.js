import React from "react";
import "./referral.css";
import Blue from "../../Assets/Images/Group25.png";

function Ref_Friend() {
  return (
    <div className="ref_bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="row mt-5 d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6 border border-primary">
                <div className="t-refer-friends">Refer Friends</div>
                <div className="t-ref-earn">Earn Crypto Together</div>
                <div className="ref-earn-bg">
                  <div className="d-flex justify-content-around p-3 padding-responsive">
                    <h3 className="t-earnUp">Earn up to</h3>
                    <h3 className="t-earnUp">I</h3>
                    <p className="t-5-from">5% from your friends’ earnings</p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 border border-primary d-flex justify-content-center">
                <div className="ref-box">
                  <div className="ref-inner-box">
                    <div>
                      <img src={Blue} className="img-fluid" width={"90px"} />
                    </div>
                    <div className="row d-flex justify-content-center p-3">
                      <h3 className="t-my-invitation">My Invitation Link</h3>
                      <button className="btn-YourLink m-2">Your Link</button>
                      <button className="btn-ref-connect m-2">
                        Connect Wallet
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

export default Ref_Friend;
