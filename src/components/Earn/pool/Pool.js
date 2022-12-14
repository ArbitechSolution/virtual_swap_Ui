import React from "react";
import E_Navbar from "../E_Navbar";
import "./Pool.css";
import girdIcon from "../../../Assets/Images/gird.png";
import list_icon from "../../../Assets/Images/listIcon.png";
import { Link } from "react-router-dom";
import coinIcon from "../../../Assets/Images/Group5.png";
import calculatorIcon from "../../../Assets/Images/calculator.png";
function Pool() {
    const data=[
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },,
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },,
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },,
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },,
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
        {
            cakeStaked:"0.0",
            flexibleAPY:"20.21",
            lockedAPR:"Up to 20.21%",
            totalstaked:"980,9783"
        },
    ]
  return (
    <div className="container">
      <E_Navbar />
      <div className="row">
        <div className="col-md-12 mt-5">
          <h1 className="text-Syrup mt-5">Syrup Pools</h1>
          <p className="text-Ptitle mb-5">
            Just stake some tokens to earn. High APR, low risk
          </p>
          {/* **********************************************************************************8 */}
          <div className="row mt-5">
            <div className="col-12 mb-3">
              <div className=" d-flex justify-content-between align-items-end">
                <div className="">
                  <img src={list_icon} className="img-fluid" width={"18px"} />
                </div>
                <div className="">
                  <Link to="/farmGrid" className="link_hover">
                    <img src={girdIcon} className="img-fluid" width={"18px"} />
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
          </div>
          {/* *********************************************************************************** */}
          <div className="row mt-5">
          <table>
          { data.map((data)=>{
            return(
                <>
                    <tr className="tableRow">
                    <th></th>
                    <th>Cake Staked</th>
                    <th>Flexible APY</th>
                    <th>locked APR</th>
                    <th>Total staked</th>
                    <th></th>
                    </tr>
                    <tr className="table-data">
                    <td className="text-center">
                          <img
                            src={coinIcon}
                            className="img-fluid"
                            width={"40px"}
                          />
                          <span >VS-BNB</span>
                        </td>
                    <td>
                    <div className="d-flex flex-column">
                    <div>{data.cakeStaked}</div>
                    <div className="text-usd">0.usd</div>
                    
                    </div>
                        
                    </td>
                    <td>
                    <img
                            src={calculatorIcon}
                            className="img-fluid"
                            width={"15px"}
                          />&nbsp; {data.flexibleAPY}
                    </td>
                    <td>
                        {data.lockedAPR} &nbsp;
                        <img
                            src={calculatorIcon}
                            className="img-fluid"
                            width={"15px"}
                          />
                        
                    </td>
                    <td>
                        {data.totalstaked}
                        &nbsp;
                        <span className="text-vs">VS</span>
                    </td>
                    <td className="Text-PDetail">
                       Detail
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
  );
}

export default Pool;
