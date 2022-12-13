import React from "react";
import E_Navbar from "../E_Navbar";
import "./Farms.css";
import ArrowIcon from "../../../Assets/Images/arrow.png";
import Plus from "../../../Assets/Images/plusIcon.png";
import QuestionMark from "../../../Assets/Images/question.png";
import conn_icon from "../../../Assets/Images/connection_icon.png";
import girdIcon from "../../../Assets/Images/gird.png";
import list_icon from "../../../Assets/Images/listIcon.png";
import coinIcon from "../../../Assets/Images/Group5.png";
import calculatorIcon from "../../../Assets/Images/calculator.png";
import questionIcon from "../../../Assets/Images/Group6.png";
import ArrowDownIcon from "../../../Assets/Images/ArrowDown.png"

function Farms() {
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
          <div className="col-12">
            <div className="row d-flex justify-content-between farms_bg">
              <div className="col-6 d-flex justify-content-center align-items-center ">
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
              <div className="col-6">
                <div className="row d-flex justify-content-center mb-5">
                  <div className="col-5 frms-bg mt-5">
                    <div className="row d-flex justify-content-end margin-swap">
                      <div className="col-2 ">
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
            {/* **********************************************************************************8 */}
            <div className="row ">
              <div className="col-12 border broder-primary">
                <div className=" d-flex justify-content-between">
                  <div className="">
                    <img src={list_icon} className="img-fluid" width={"18px"} />
                  </div>
                  <div className="">
                    <img src={girdIcon} className="img-fluid" width={"18px"} />
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
                    <label>Sort By</label>
                    <input className="inputBack"></input>
                  </div>
                </div>
              </div>
            </div>
            {/* *********************************************************************************** */}
            <div className="row mb-5">
            <table>
              {
                data.map((data)=>{
                  return(
                    <>
                    <tr className="table-heading">
                    <th></th>
                    <th></th>
                      <th>Earn</th>
                      <th>APR</th>
                      <th>Liquidity</th>
                      <th>Multiplier</th>
                      <th></th>
                    </tr>
                    
                    <tr className="table-row">
                    <td className="text-center">
                      <img src={coinIcon} className="img-fluid" width={"40px"}/>
                      <span> VS-BNB</span>
                    </td>
                    <td className="">
                      <button className="btn-core">
                      Core
                      </button>
                      <button className=" ms-2 btn-boosted">
                      Boosted
                      </button>
                    </td>
                      <td>
                      {data.earn}
                      
                      </td>
                      <td>
<img src={calculatorIcon} className="img-fluid" width={"30px"}/>&nbsp;&nbsp;
                      <del> {data.apr}</del>
                      <span className="tdiscount">&nbsp; {data.discount}</span>
                        
                      </td>
                      <td>
                      {data.liquidity}&nbsp;
                      <img src={questionIcon} className="img-fluid" width={"20px"}/>
                      </td>
                      <td>
                      {data.multiplier}&nbsp;
                      <img src={questionIcon} className="img-fluid" width={"20px"}/>
                      </td>
                      <td>
                      <img src={ArrowDownIcon} className="img-fluid" width={"20px"}/>
                      </td>
                    </tr>
                  
                    </>
                  
                  )
                })
              }
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farms;
