import React from "react";
import cardpic from "../../Assets/Images/top-card-pic.png";
import blue from "../../Assets/Images/Group25.png";
import pink from "../../Assets/Images/Group26.png";
import yellow from "../../Assets/Images/Group27.png";

function Legend_Top() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5">
          <div className="row mt-5">
            <h3 className="t-legend-top">Top 10 by EXP</h3>
            <p className="text-white text-center">
              LAST UPDATED DEC 14, 2022 9:24 PM (GMT-8)
            </p>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-4 ">
              <div className="legend-top-box">
                <div className="row">
                  <div className="legend-circle ms-3">
                    <div className="legend-circle-text mt-2">1</div>
                  </div>
                  <div className="text-center m-0">
                    <img
                      src={cardpic}
                      className="img-fluid cardpic"
                      width={"100%"}
                    />
                  </div>
                  <div>
                    <img
                      src={blue}
                      className="img-fluid blueIcon"
                      width={"60px"}
                    />
                  </div>
                  <div className=" card-top ">
                    <div className=" p-2 d-flex justify-content-between bd-highlight ">
                      <div className="">
                        <div className="top-text-value">2,012,310</div>
                        <div className="top-text-virtual">virtual Swap</div>
                      </div>
                      <div className="top-text-add">0xk...w38h</div>
                    </div>
                    <div className="p-2">
                      <div className="top-text-value">2,012,310</div>
                      <div className="top-text-virtual">virtual Swap</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="legend-top-box2">
                <div className="row">
                  <div className="legend-circle2 ms-3">
                    <div className="legend-circle-text2 mt-2">2</div>
                  </div>
                  <div className="text-center ">
                    <img
                      src={cardpic}
                      className="img-fluid cardpic2"
                      width={"100%"}
                    />
                  </div>
                  <div>
                    <img
                      src={pink}
                      className="img-fluid blueIcon"
                      width={"60px"}
                    />
                  </div>
                  <div className=" card-top ">
                    <div className=" p-2 d-flex justify-content-between bd-highlight ">
                      <div className="">
                        <div className="top-text-value2">2,012,310</div>
                        <div className="top-text-virtual">virtual Swap</div>
                      </div>
                      <div className="top-text-add">0xk...w38h</div>
                    </div>
                    <div className="p-2">
                      <div className="top-text-value2">2,012,310</div>
                      <div className="top-text-virtual">virtual Swap</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="legend-top-box3">
                <div className="row">
                  <div className="legend-circle3 ms-3">
                    <div className="legend-circle-text3 mt-2">3</div>
                  </div>
                  <div className="text-center m-0">
                    <img
                      src={cardpic}
                      className="img-fluid cardpic3"
                      width={"100%"}
                    />
                  </div>
                  <div>
                    <img
                      src={yellow}
                      className="img-fluid blueIcon"
                      width={"60px"}
                    />
                  </div>
                  <div className=" card-top ">
                    <div className=" p-2 d-flex justify-content-between bd-highlight ">
                      <div className="">
                        <div className="top-text-value3">2,012,310</div>
                        <div className="top-text-virtual">virtual Swap</div>
                      </div>
                      <div className="top-text-add">0xk...w38h</div>
                    </div>
                    <div className="p-2">
                      <div className="top-text-value3">2,012,310</div>
                      <div className="top-text-virtual">virtual Swap</div>
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

export default Legend_Top;
