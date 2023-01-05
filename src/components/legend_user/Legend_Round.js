import React from "react";
import blue from "../../Assets/Images/Group25.png";
import pink from "../../Assets/Images/Group26.png";
import yellow from "../../Assets/Images/Group27.png";
import picture from "../../Assets/Images/legend-pic.png";

function Legend_Round() {
  return (
    <div className="legend_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 mb-5">
            <div>
              <h3 className="t-round-timeline text-center">ROund 3</h3>
              <p className="t-timeline-if">
                If the digits on your tickets match the winning numbers in the
                correct <br />
                order, you win a portion of the prize pool.Simple!
              </p>
            </div>
            <div className="row  d-flex justify-content-center mt-5">
            <div className="col-md-11">
            <div className="row d-flex justify-content-center ">
              <div className="col-md-4  ">
                <div className="round-box">
                  <div className="">
                    <div className="img-legend">
                      <img src={pink} className="img-fluid" width={"72px"} />
                    </div>
                    <div className="img-legend-2">
                      <img src={picture} className="img-fluid" />
                    </div>
                    <div className="buyticket-text">
                      <h3 className="t-legend-buyTicket">Buy Tickets</h3>
                      <p className="t-legend-prices">
                        Prices are set when the round starts, equal to 5 USD in
                        CAKE per ticket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="round-box2">
                <div className="">
                    <div className="img-legend">
                      <img src={pink} className="img-fluid" width={"72px"} />
                    </div>
                    <div className="img-legend-2">
                      <img src={picture} className="img-fluid" />
                    </div>
                    <div className="buyticket-text">
                      <h3 className="t-legend-play">Play as a team</h3>
                      <p className="t-legend-prices">
                      There is one draw every day alternating between 0 AM UTC and 12 PM UTC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="round-box3">
                <div className="">
                    <div className="img-legend">
                      <img src={pink} className="img-fluid" width={"72px"} />
                    </div>
                    <div className="img-legend-2">
                      <img src={picture} className="img-fluid" />
                    </div>
                    <div className="buyticket-text">
                      <h3 className="t-legend-everyone">Everyone’s a winner!</h3>
                      <p className="t-legend-prices">
                      Once the round’s over, come back to the page and check to see if you’ve won!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-11 vs_bg mt-3">
              <div className="d-flex justify-content-center p-3 t-legend-vs">
              3000 VS
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

export default Legend_Round;
