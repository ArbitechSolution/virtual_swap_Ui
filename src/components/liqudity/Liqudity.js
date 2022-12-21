import React from "react";
import "./Liqudity.css";
import coin from "../../Assets/Images/bnb-logo.png";
import SettingICon from "../../Assets/Images/MaskSetting.png";
import Ticon from "../../Assets/Images/TimeIcon.png";
import ExchangeIcon from "../../Assets/Images/Exchange.png";
import CopyIcon from "../../Assets/Images/Copy.png";
import connection_icon from "../../Assets/Images/connection_icon.png";
import Plus from "../../Assets/Images/plusIcon.png";
import TradeNavbar from "../trade-swap/Navbar/TradeNavbar";

function Liqudity() {
  return (
    <div className="container">
      <TradeNavbar />
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-md-6  mt-5">
        <div className="Liquidity-bg">
          <div className="row d-flex justify-content-end margin-swap">
            <div className="col-4 col-xl-2 col-lg-3 ">
              <div className="d-flex justify-content-between">
                <div className="ellispe-two">
                  <div className=" d-flex justify-content-center signal-icon">
                    <img
                      src={SettingICon}
                      className="img-fluid"
                      width={"18px"}
                    />
                  </div>
                </div>
                <div className="ellispe-two">
                  <div className=" d-flex justify-content-center signal-icon">
                    <img src={Ticon} className="img-fluid" width={"18px"} />
                  </div>
                </div>
                {/* <div className="ellispe-two">
                      <div className=" d-flex justify-content-center signal-icon">
                        <img
                          src={RecycleIcon}
                          className="img-fluid"
                          width={"18px"}
                        />
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="text-center tYour">Your Liquidity</div>
            <div className="text-center tRemove">
              Remove liquidity to receive tokens back
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-4">
            <div className="col-md-10 d-flex justify-content-center">
              <div className="input-group  Linput mb-2 mt-3">
                <input
                  type="text"
                  className="form-control form-controlL"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Connect to a wallet to view your liquidity"
                />
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-3 ">
            <div className="col-lg-3 col-sm-3 responsive-liquidity-button">
              <div className="d-flex justify-content-center align-items-center">
                <button className="d-flex justify-content-start align-items-center btn_add_bg">
                  <div className="btn_Add_icon_bg p-3 text-white">
                    <img src={Plus} className="img-fluid" />
                  </div>
                  <div className=" btn_conn ">Add Liquidity</div>
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

export default Liqudity;
