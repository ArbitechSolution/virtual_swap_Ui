import React from "react";
import "./Latest.css";

function Rules() {
  const data = [
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
    {
      a: "Eligible trading pairs",
      b: "Detail",
    },
  ];
  return (
    <div className="T_bg rule-margin">
      {/* <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row ">
              <div className="col-md-6">
                <div className="t-rule mt-5">Rules</div>
                <div className="col-md-12 rule-box1 mb-4">
                  <div className="p-4">
                    <div className="title-box1">
                      Trade to increase your rank
                    </div>
                    <div className="detail-box1 mt-4">
                      Eligible pairs: DAR/BNB, CAKE/BNB, and CAKE/BUSD. Please
                      note that the volume from limit orders will not be
                      indexed.
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="col-md-12 rule-box2 mb-4">
                  <div className="p-4">
                    <div className="title-box2">Play as a team</div>
                    <div className="detail-box1 mt-4">
                      Eligible pairs: DAR/BNB, CAKE/BNB, and CAKE/BUSD. Please
                      note that the volume from limit orders will not be
                      indexed.
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="col-md-12 rule-box3 mb-4">
                  <div className="p-4">
                    <div className="title-box3">Everyone’s a winner!</div>
                    <div className="detail-box1 mt-4">
                      Eligible pairs: DAR/BNB, CAKE/BNB, and CAKE/BUSD. Please
                      note that the volume from limit orders will not be
                      indexed.
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="col-md-6  Rule_table_bg">
                <div className=" ">
                  <div className="table_detail">Detail</div>
                  <div className="row">
                    <table className="table-responsive ">
                      {data.map((data) => {
                        return (
                          <>
                            <tr className="text-white">
                              <td className="text-a">{data.a}</td>
                              <td className="text-b" colspan="2">
                                {data.b}
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
      </div> */}
    </div>
  );
}

export default Rules;
