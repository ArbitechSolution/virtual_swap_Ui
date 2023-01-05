import React from "react";
import arrowleft from "../../Assets/Images/arrowleft.png";
import arrowright from "../../Assets/Images/arrowright.png";
import faceIcon from "../../Assets/Images/logo.png";

function Legend_Luckydraw() {
  const data = [
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
    {
      no: "Eligible trading pairs",
      address: "0xk...w38h",
      reward: "$150",
      icon: faceIcon,
    },
  ];
  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-md-12 border border-primary">
          <div className="row">
            <h2 className="t-luckydraw">Lucky Draw</h2>
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-md-10 border border-primary mt-5">
              <div className="row d-flex align-items-center">
                <div className="col-md-6 border border-primary time-btn-responsive">
                  <div className="btn-group">
                    <button type="button" className="btn-drawing">
                      drawing 1
                    </button>
                    <button type="button" className="btn-drawing">
                      drawing 2
                    </button>
                  </div>
                </div>
                <div className="col-md-6 border border-primary d-flex justify-content-end time-btn-responsive">
                  <div className="d-flex gap-2">
                    <div className="arrow_bg_luck p-1">
                      <img
                        src={arrowleft}
                        className="img-fluid"
                        width={"20px"}
                      />
                    </div>
                    <div className="txt_bg_luck">
                      <div className="mt-2">Round # 4658</div>
                    </div>
                    <div className="arrow_bg_luck p-1">
                      <img
                        src={arrowright}
                        className="img-fluid ms-1"
                        width={"20px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="table">
                <table className=" table-lengend">
                  <tr className=" time-bomb-table text-center">
                    <th style={{ width: "350px" }}>No</th>
                    <th>Address</th>
                    <th> Reward</th>
                  </tr>
                  {data.map((data) => {
                    return (
                      <>
                        <tr className="data-trade-table">
                          <td>{data.no}</td>
                          <td>
                            <img
                              src={data.icon}
                              className="img-fluid"
                              width={"30px"}
                            />{" "}
                            &nbsp;
                            {data.address}
                          </td>
                          <td>{data.reward}</td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
              <div className="timebomb-last">
                Last Updated: Sep 15, 2022 00:58 (GMT-7)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legend_Luckydraw;
