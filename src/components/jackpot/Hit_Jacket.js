import React from "react";
import "./jacket.css";
import FaceCircle from "../../Assets/Images/Group25.png"

function Hit_Jacket() {
  return (
    <div className="jackpot_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row mt-5 mb-5">
              <div className="col-md-6">
                <div className="tj-lottery">
                  0xf3...6fe bought 6 lottery tickets.
                </div>
                <div className="text-hit-the">Hit The Jacpot</div>
                <div className="text-take-your">
                  Take your chances of winning huge progressive jackpots by
                  opening PandoBoxes or upgrading DroidBots. Purchase extra
                  tickets to increase your odds of winning.
                </div>
                <div className="d-flex gap-4 mt-3">
                    <button className="btn-Jackpot-Buy">Buy Ticket -$1</button>
                    <button className="btn-Jackpot-View">View Rules</button>
                </div>
                <div className="text-test mt-3">
                Test your luck & Win big! 67 tickets have been sold today.
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="jackpot-box">
                <div className="inner-jackpot-box">
                <div className="round-box me-3">
                <div className="text-round-jackpot mt-2">
                Round # 4658
                </div>
                </div>
                <div>
<img src={FaceCircle}  className="img-fluid" width={"73px"}/>
                </div>
                <div className="text-jackpotPool">
                Jackpot Pool
                </div>
                <div className="d-flex flex-column justify-content-center p-4">
<div className="inputbox">
<div className="input-value mt-3">
$297,397
</div>
</div>
<labal className="t-Jackpot-Draw mt-2">
Drawn in
</labal>
<div className="inputbox">
<div className="input-value mt-3">
32M  : 50s 
</div>
</div>
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

export default Hit_Jacket;
