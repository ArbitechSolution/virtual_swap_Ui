import React from "react";
import TradeNavbar from "./Navbar/TradeNavbar";
import "./Trade_Swap.css";
import coin from "../../Assets/Images/bnb-logo.png";
import Virutalcoin from "../../Assets/Images/uu9.png";
import frame from "../../Assets/Images/Frame.png";
import signalIcon from "../../Assets/Images/SignalIcon.png";
import SettingICon from "../../Assets/Images/MaskSetting.png";
import Ticon from "../../Assets/Images/TimeIcon.png";
import RecycleIcon from "../../Assets/Images/Recycle.png";
import ExchangeIcon from "../../Assets/Images/Exchange.png";
import CopyIcon from "../../Assets/Images/Copy.png";
import connection_icon from "../../Assets/Images/connection_icon.png";

function Trade_Swap() {
  return (
    <div className="container">
      <TradeNavbar />
      <div className="row d-flex justify-content-center mb-5 ">
        <div className="col-12 swap-margin">
          <div className="row d-flex justify-content-between">
            <div className="col-6">
            <div className="graph-bg">
              <div className="row   mt-5">
                <div className="col-6 ms-3 ">
                  <div className="d-flex justify-content-around">
                    <div className="p-2 ellispe-one">
                      <img
                        src={coin}
                        className="img-fluid coin"
                        width={"40px"}
                      />
                    </div>
                    <div className="p-2 ellispe-one">
                      <img
                        src={Virutalcoin}
                        className="img-fluid Virutalcoin"
                        width={"40px"}
                      />
                    </div>
                    <div className="p-2 BNB-VirtualSwap">BNB/Virtual Swap</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-7 ">
                      <div className="d-flex justify-content-around align-items-center ms-2">
                        <div className="text-value ">72.74</div>
                        <div className="text-coin ms-1">BNB/CAKE</div>
                        <div className="text-digit ms-1">+0.043 (0.06%)</div>
                      </div>
                    </div>
                    <div className="col-5 d-flex justify-content-center align-items-center">
                      <div className="btn-group" role="group">
                        <button type="button" className="btn  btn-1">
                          24H
                        </button>
                        <button type="button" className="btn  btn-2">
                          1W
                        </button>
                        <button type="button" className="btn  btn-3">
                          1M
                        </button>
                        <button type="button" className="btn  btn-4">
                          1Y
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="">
                  <img src={frame} className="img-fluid" />
                </div>
              </div>
              <div className="row mt-5 d-flex justify-content-center ">
                <div className="d-flex justify-content-evenly text-time">
                  <div className="p-2 ">01:00 PM </div>
                  <div className="p-2 ">04:00 PM</div>
                  <div className="p-2 ">07:00 PM</div>
                  <div className="p-2 ">10:00 PM</div>
                  <div className="p-2 ">01:00 AM</div>
                  <div className="p-2 ">05:00 AM</div>
                  <div className="p-2 ">10:05 AM</div>
                </div>
              </div>
            </div>
            <div className="row mt-2 bo">
                <div className="d-flex justify-content-between">
                  <div className="p-2  tbridge">Bridge Asset to BNB Chain </div>
                  <div className="p-2  thelp">Help?</div>
                </div>
              </div>
            </div>
            <div className="col-5 swap-bg">
              <div className="row d-flex justify-content-between margin-swap">
                <div className="col-2 ">
                  <div className="ellispe-two">
                    <div className=" d-flex justify-content-center signal-icon">
                      <img
                        src={signalIcon}
                        className="img-fluid"
                        width={"16px"}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4 ">
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
                    <div className="ellispe-two">
                      <div className=" d-flex justify-content-center signal-icon">
                        <img
                          src={RecycleIcon}
                          className="img-fluid"
                          width={"18px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2 ">
                <div className="text-center tswap">Swap</div>
                <div className="text-center tswap2">
                  Trade tokens in an instant
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-2">
                <div className="col-10">
                  <label htmlFor="basic-url" className="form-label">
                    <div className="dropdown">
                      <button
                        className="btn  btn-drop dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        BNB
                      </button>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </label>
                  <div className="input-group mb-2">
                    <span className="input-group-text" id="basic-addon3">
                      <img src={coin} className="img-fluid p-1" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      value={"0.0"}
                    />
                  </div>
                </div>
              </div>
              <div className="row me-4">
                <div className="d-flex justify-content-end ">
                  <img src={ExchangeIcon} className="img-fluid" />
                </div>
              </div>
              <div className="row d-flex justify-content-center ">
                <div className="col-10">
                  <label htmlFor="basic-url" className="form-label">
                    <div className="dropdown">
                      <button
                        className="btn  btn-drop dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Virtual Swap
                      </button>
                      {/* <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul> */}
                    </div>
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">
                      <img src={coin} className="img-fluid p-1" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      value={"0.0"}
                    />
                  </div>
                </div>
              </div>
              <div className="row me-4">
                <div className="d-flex justify-content-end ">
                  <div className="copy-bg text-center">
                    <img
                      src={CopyIcon}
                      className="img-fluid p-2"
                      width={"40px"}
                    />
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-10 d-flex justify-content-between ">
                  <div className="tsnack">Snack Risk?</div>
                  <div className="tslippage">
                    Slippage Tolerance{" "}
                    <span className="tslippagevalue"> 0.5</span>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-lg-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="d-flex justify-content-start align-items-center btn_conn_bg">
                      <div className="btn_conn_icon_bg p-3 text-white">
                        <img src={connection_icon} className="img-fluid" />
                      </div>
                      <div className=" btn_conn ms-1">Connect wallet</div>
                    </button>
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

export default Trade_Swap;
