import React from "react";

function LotteryTicket() {
  return (
    <div className="container">
      <div className="row mt-5">
      <div className="col-md-12">
      <div className="row d-flex justify-content-between">
        <div className="col-md-6">
          <div className="LT-box">
            <div className="mt-2">The Virtual Swap Lottery</div>
          </div>
          <div className="t-Lt">$98,0897</div>
          <div className="t-InPrize">in Prize</div>
          <div className="btn-BuyTicket">
            <button className="bt-t-buyticket">Buy Tickets</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="LT-box2">
            <div className="row p-3 mt-3">
              <div className="col-md-7 t-Get">Get Your Tickets Now!</div>
              <div className="col-md-5">
                <div className="LT-time-box">
                  <div className="t-LT-Date text-center p-1">1D 6H 8M</div>
                </div>
                <div className="t-until text-center">Until The Draw</div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-11">
                <div>
                  <label className="t-NextDraw">Next Draw</label>
                  <div className="T-input">
                    <div className="text-center ">
                      <div className="TDraw p-2">
                        #743 | Draw: Dec 9, 2022, 4:00 PM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="T-input mt-2">
                  <div className="d-flex justify-content-between">
                    <div className="t-PrizePot">Prize Pot</div>
                    <div className="t-Dollar">~$97,439</div>
                  </div>
                </div>
                <div className="T-input mt-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="t-PrizePot">Prize Pot</div>
                    <div className="t-Dollar">~$97,439</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="LT-circle">
                <div className="LT-Detail text-center mt-4">Detail</div>
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

export default LotteryTicket;
