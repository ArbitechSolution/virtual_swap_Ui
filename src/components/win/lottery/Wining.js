import React from "react";
import "./Lottery.css";
import ticketA from "../../../Assets/Images/Group17.png";
import ticketB from "../../../Assets/Images/Group18.png";
import circleA from "../../../Assets/Images/Group19.png";
import circleB from "../../../Assets/Images/Group20.png";
import circleC from "../../../Assets/Images/Group21.png";
import circleD from "../../../Assets/Images/Group22.png";
import circleE from "../../../Assets/Images/Group23.png";
import circleF from "../../../Assets/Images/Group24.png";
import close from "../../../Assets/Images/close.png";
import success from "../../../Assets/Images/success9.png";

function Wining() {
  return (
    <div className="container  mb-5 win_margin">
      <div className="row ">
        <div className="col-md-12 mt-5">
          <div className="row d-flex justify-content-around">
            <div className="col-md-6     ">
              <div className="twining_criteria">Winning Criteria</div>
              <div className="t-thedigits">
                The digits on your ticket must match in the correct order to
                win.
              </div>
              <div className="there_an">
                <div className="mt-5">
                  Here’s an example lottery draw, with two tickets, A and B.
                </div>
                <p>
                  <span>
                    <img src={ticketA} className="img-fluid" width={"56px"} />
                  </span>
                  Ticket A: The first 3 digits and the last 2 digits match, but
                  the 4th digit is wrong, so this ticket only wins a “Match
                  first 3” prize.
                </p>
                <p>
                  <span>
                    <img src={ticketB} className="img-fluid" width={"56px"} />
                  </span>
                  Ticket A: The first 3 digits and the last 2 digits match, but
                  the 4th digit is wrong, so this ticket only wins a “Match
                  first 3” prize.
                </p>
                <p>
                  Prize brackets don’t ‘stack’: if you match the first 3 digits
                  in order, you’ll only win prizes from the ‘Match 3’ bracket,
                  and not from ‘Match 1’ and ‘Match 2’.
                </p>
              </div>
            </div>
            <div className="col-md-6 wining-box">
              <div className="row  mt-5 me-3">
                <div className=" col-md-12    ">
                  <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-2 wining-circle">
                      <div className="text-center mt-1">A</div>
                    </div>
                    <div className="col-md-10    ">
                      <div className="row ">
                        <div className="col-md-12 d-flex justify-content-between">
                          <img
                            src={circleA}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleB}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleC}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleD}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleE}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleF}
                            className="img-fluid circleA"
                            width={"46px"}
                          />
                        </div>
                        <div className="col-md-12 d-flex justify-content-around mt-3">
                          <img src={close} className="img-fluid" width={"16"} />

                          <img
                            src={success}
                            className="img-fluid "
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />
                        </div>
                        <div className="col-md-12 d-flex justify-content-around mt-3">
                          <div className="t1-blue">1</div>
                          <div className="t1-yellow">1</div>
                          <div className="t1-pink">1</div>
                          <div className="t1-blue">1</div>
                          <div className="t1-yellow">1</div>
                          <div className="t1-pink">1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className=' col-md-2 wining-circle '>
<div className='text-center mt-1'>
A
</div>
</div> */}
              </div>
              <div className="row  mt-5 me-3">
                <div className=" col-md-12    ">
                  <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-md-2 wining-circle">
                      <div className="text-center mt-1">B</div>
                    </div>
                    <div className="col-md-10    ">
                      <div className="row ">
                        <div className="col-md-12 d-flex justify-content-between">
                          <img
                            src={circleA}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleB}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleC}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleD}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleE}
                            className="img-fluid circleA"
                            width={"46px"}
                          />

                          <img
                            src={circleF}
                            className="img-fluid circleA"
                            width={"46px"}
                          />
                        </div>
                        <div className="col-md-12 d-flex justify-content-around mt-3">
                          <img src={close} className="img-fluid" width={"16"} />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />

                          <img
                            src={success}
                            className="img-fluid"
                            width={"26px"}
                          />
                        </div>
                        <div className="col-md-12 d-flex justify-content-around mt-3">
                          <div className="t1-blue">1</div>
                          <div className="t1-yellow">1</div>
                          <div className="t1-pink">1</div>
                          <div className="t1-blue">1</div>
                          <div className="t1-yellow">1</div>
                          <div className="t1-pink">1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className=' col-md-2 wining-circle '>
<div className='text-center mt-1'>
A
</div>
</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wining;
