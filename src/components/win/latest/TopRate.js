import React from "react";
import "./Latest.css";
import faceIcon from "../../../Assets/Images/Win/uu24.png";

function TopRate() {
  const data = [
    {
      no: "1",
      amount: "$2,734,120",
      address: "98six...989h",
    },
    {
      no: "1",
      amount: "$2,734,120",
      address: "98six...989h",
    },
    {
      no: "1",
      amount: "$2,734,120",
      address: "98six...989h",
    },
    {
      no: "1",
      amount: "$2,734,120",
      address: "98six...989h",
    },
    {
      no: "1",
      amount: "$2,734,120",
      address: "98six...989h",
    },
    {
      no: "1",
      amount: "$2,734,120",
      address: "98six...989h",
    },
  ];
  return (
    <div className="T_bg mt-5">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-12">
            <div className="row d-flex justify-content-evenly align-items-center">
              <div className="col-md-5">
                <div className="d-flex justify-content-between p-2">
                  <div className="t-1box">1</div>
                  <div className="t-volume1">
                    $28,187,929
                    <div className="t-volume">Volume</div>
                  </div>
                  <div className="t-volume1">
                    <span>
                      <img
                        src={faceIcon}
                        className="img-fluid faceIcon"
                        width={"25px"}
                      />
                    </span>
                    2,230
                    <div className="t-volume">Participants</div>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <div className="t-2box">2</div>
                  <div className="t-volume2">
                    $28,187,929
                    <div className="t-volume">Volume</div>
                  </div>
                  <div className="t-volume2">
                    <span>
                      <img
                        src={faceIcon}
                        className="img-fluid"
                        width={"25px"}
                      />
                    </span>
                    2,230
                    <div className="t-volume">Participants</div>
                  </div>
                </div>
                <div className="d-flex justify-content-between p-2">
                  <div className="t-3box">3</div>
                  <div className="t-volume3">
                    $28,187,929
                    <div className="t-volume">Volume</div>
                  </div>
                  <div className="t-volume3">
                    <span>
                      <img
                        src={faceIcon}
                        className="img-fluid"
                        width={"25px"}
                      />
                    </span>
                    2,230
                    <div className="t-volume">Participants</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 table_bg ">
              <div className="">
                <h3 className="t-topTrades mt-2">Top Traders</h3>
                <p className="t-since mt-2">Since start of the competition</p>
                <div className="row ">
                  <div
                    className="btn-groupTop d-flex"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button type="button" className="btn-TopRate ">
                      Total
                    </button>
                    <button type="button" className="btn-TopRate">
                      Storm
                    </button>
                    <button type="button" className="btn-TopRate ">
                      Flippers
                    </button>
                    <button type="button" className="btn-TopRate">
                      Swaper
                    </button>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <table className="table-responsive t-table">
                    {data.map((data) => {
                      return (
                        <>
                          <tr className="text-white table-Top">
                            <td colspan="5">{data.no}</td>
                            <td>{data.amount}</td>
                            <td>
                              <img
                                src={faceIcon}
                                className="img-fluid"
                                width={"14px"}
                              />
                              {data.address}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </table>
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

export default TopRate;
