import React from "react";
import E_Navbar from "../E_Navbar";
import "./Farms.css";
import ArrowIcon from "../../../Assets/Images/arrow.png";
import Plus from "../../../Assets/Images/plusIcon.png";
import QuestionMark from "../../../Assets/Images/question.png";
import conn_icon from "../../../Assets/Images/connection_icon.png";
import girdIcon from "../../../Assets/Images/gird.png";
import list_icon from "../../../Assets/Images/listIcon.png";
import coinIcon from "../../../Assets/Images/Group7.png";
import calculatorIcon from "../../../Assets/Images/calculator.png";
import connectICon from "../../../Assets/Images/connection_icon.png";
import ArrowDownIcon from "../../../Assets/Images/ArrowDown.png";
import { Link } from "react-router-dom";
import PcoinIcon from "../../../Assets/Images/Group8.png"
import BcoinIcon from "../../../Assets/Images/Group9.png"

function Fgird() {
  const data = [
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
    },
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
    },
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
    },
    {
      earn: "0",
      apr: "20.21",
      discount: "upto 13.89%",
      liquidity: "$980,9783",
      multiplier: "40x",
    },
  ];
  return (
    <div className="farms_bg">
      <div className="container">
        <E_Navbar />
        <div className="row mt-5 mb-5">
          <div className="col-md-12">
            <div className="row d-flex justify-content-between farms_bg">
              <div className="col-md-6 d-flex justify-content-center align-items-center ">
                <div className="">
                  <div class="d-flex flex-column bd-highlight">
                    <div class=" tfarms"> Farms</div>
                    <div class=" tstake">Stake LP tokens to earn.</div>
                    <div className="mt-3">
                      <button className="d-flex justify-content-start align-items-center btn_com_bg">
                        <div className="btn_com_icon_bg p-2 text-white">
                          <img
                            src={ArrowIcon}
                            className="img-fluid ArrowIcon "
                            width={"20px"}
                          />
                        </div>
                        <div className=" btn_com ms-2">Community Action</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row d-flex justify-content-center mb-5">
                  <div className="col-md-12 col-lg-9 col-xl-7 mt-5">
                  <div className="frms-bg">
                    <div className="row d-flex justify-content-end margin-swap">
                      <div className="col-3 ">
                        <div className="d-flex justify-content-between">
                          <div className="ellispe-two">
                            <div className=" d-flex justify-content-center signal-icon">
                              <img
                                src={QuestionMark}
                                className="img-fluid"
                                width={"13px"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2 ms-3 ">
                      <div className="tYield">Yield Booster</div>
                      <div className="tconnectWallet">
                        Connect wallet to view booster
                      </div>
                      <div className="tanactive">
                        An active fixed-term CAKE staking position is required
                        for activating farm yield boosters
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5 btn-margin">
                      <div className="col-lg-3">
                        <div className="d-flex justify-content-center align-items-center">
                          <button className="d-flex justify-content-start align-items-center btn_Connect_Wallet_bg">
                            <div className="btn_Connect_Wallet_icon_bg p-3 text-white">
                              <img src={conn_icon} className="img-fluid" />
                            </div>
                            <div className=" btn_conn ">Connect Wallet</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* **********************************************************************************8 */}
            {/* <div className="row mt-4">
              <div className="col-12 mb-3">
                <div className=" d-flex justify-content-between align-items-end">
                  <div className="">
                    <Link to="/farms" className="link_hover">
                      <img
                        src={list_icon}
                        className="img-fluid"
                        width={"18px"}
                      />
                    </Link>
                  </div>
                  <div className="">
                    <Link to="/farmGrid" className="link_hover">
                      <img
                        src={girdIcon}
                        className="img-fluid"
                        width={"18px"}
                      />
                    </Link>
                  </div>
                  <div className="">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Staked only
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckChecked"
                      >
                        Booster Available
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div
                      className="btn-group btn-group-lg"
                      role="group"
                      aria-label="Large button group"
                    >
                      <button type="button" className="btn btn-Live ">
                        Live
                      </button>
                      <button type="button" className="btn btn-Live">
                        Finished
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="tsort">SORT BY</label>
                    <select
                      className="form-select inputBack"
                      aria-label="Default select example"
                    >
                      <option selected>Hot</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                  <div>
                    <label className="tsort">SEARCH</label>
                    <input
                      class="form-control search-input"
                      type="search"
                      placeholder="Search Farms"
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* *********************************************************************************** */}
            <div className="row d-flex justify-content-between responsive-Fcard">
              <div className="col-3 Fcard-1 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle1">
                    <div className="d-flex justify-content-center">
                      <img src={coinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount  mt-4 ms-4">
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
              </div>
              <div className="col-3 Fcard-2">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle2">
                    <div className="d-flex justify-content-center">
                      <img src={PcoinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount  mt-4 ms-4">
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
              </div>
              <div className="col-3 Fcard-3 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle3">
                    <div className="d-flex justify-content-center">
                      <img src={BcoinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount  mt-4 ms-4">
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
              </div>
              <div className="col-3 Fcard-1  ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle1">
                    <div className="d-flex justify-content-center">
                      <img src={coinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount  mt-4 ms-4">
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
              </div>
              <div className="col-3 Fcard-2 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle2">
                    <div className="d-flex justify-content-center">
                      <img src={PcoinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount  mt-4 ms-4">
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
              </div>
              <div className="col-3 Fcard-3 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle3">
                    <div className="d-flex justify-content-center">
                      <img src={BcoinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount mt-4 ms-4">
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
              </div>
            </div>
            <div className="row d-flex justify-content-between mt-5 mb-5">
              {/* <div className="col-3 Fcard-1 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle1">
                    <div className="d-flex justify-content-center">
                      <img src={coinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount mt-3 ms-4">
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
              </div> */}
              {/* <div className="col-3 Fcard-2 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle2">
                    <div className="d-flex justify-content-center">
                      <img src={PcoinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount mt-3 ms-4">
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
              </div>
              <div className="col-3 Fcard-3 ">
                <div className="col-12 d-flex justify-content-between">
                  <div className="Fcircle3">
                    <div className="d-flex justify-content-center">
                      <img src={BcoinIcon} className="img-fluid coinIcon1 p-2" />
                    </div>
                  </div>
                  <div className="tvs p-3">
                    <div className="text-end">VS-BNB</div>
                    <div className="mt-2 d-flex justify-content-end gap-2">
                      <button className="btn-core1">Core</button>
                      <button className="btn-boosted1">Boosted</button>
                      <button className="btn-40x1">40x</button>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">APR</div>
                    <div className="d-flex flex-row">
                      <div>
                        <img
                          src={calculatorIcon}
                          className="img-fluid"
                          width={"20px"}
                        />{" "}
                        &nbsp;
                      </div>
                      <div className="tDel">
                        {" "}
                        <del> 20.21</del>
                      </div>
                      <div className="tUpto mt-2"> &nbsp; upto 13.89%</div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 ">
                  <div className="col-11   d-flex justify-content-between align-items-center">
                    <div className="tAPR">Earn</div>
                    <div className="tVSF me-4"> Virtual Swap+Fees</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-around  mt-4">
                  <div className="col-5   align-items-center">
                    <div className="tAPR">Virtual Swap</div>
                    <div className="tVSF me-4">0.0000</div>
                  </div>
                  <div className="col-5   d-flex justify-content-center align-items-center">
                    <button className="btn-harvest">Harvest</button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-4 ">
                  <div className="col-11  ">
                    <div className="tyield">YIELD BOOSTER</div>
                    <div className="t2x"> Up to 2X</div>
                    <div className="text-activater">
                      Connect wallet to activater
                    </div>
                    <div className="text-cake">CAKE-BNB LP STAKED</div>
                  </div>
                </div>
                <div className="row d-flex justify-content-end mt-4 me-1">
                  <div className=" d-flex justify-content-end  ">
                    <div className="tDetail">Detail</div>
                  </div>
                </div>
                <div>
                  <div className=" align-items-center text_amount mt-3 ms-4">
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
              </div> */}
              
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fgird;
