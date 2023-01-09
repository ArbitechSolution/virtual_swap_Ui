import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import face from "../../Assets/Images/uu3.png"

function Jackpot_Wait() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-12  ">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div>
                <button className="btn-jackpot-result">Results</button>
                <button className="btn-jackpot-result">Your History</button>
                <button className="btn-jackpot-result">Your Tickets</button>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end gap-1 jackpot-responsive">
              <button className="btn-backArrow">
                <IoIosArrowBack />
              </button>
              <div className="round-box1">
                <div className="text-round-jackpot mt-2">Round # 4658</div>
              </div>
              <button className="btn-backArrow">
                <IoIosArrowForward />
              </button>
            </div>
            <div className="col-md-12">
            <div className="wait-box">
            <div className="row ">
            <div className="col-md-8  ">
            <div className="text-center mt-5">
            <img src ={face} className="img-fluid mt-5" width={"70px"}/>
<h3 className="t-waiting">
Waiting for drawing...
</h3>
<p className="text-you-can">
You can buy more tickets & increase your win rate.
</p>
<a className="text-viewDetail mt-5 mb-5">View Detail</a>
            </div>
        
            </div>
            <div className="col-md-4   jackpot-responsive-prize">
            <div className="PrizePot-box">
            <div className="p-5">
                <h3 className="text_prize_Pot">Prize Pot
</h3>
<h3 className="text-JackPot-dollar">
$0
</h3>
<p className="text-jackpot-total mt-5">Total tickets this round: 0</p>
<p className="text-jackpot-total">
Total winning tickets: 0</p>
<h3 className="text_prize_Pot mt-5">
Your Tickets
</h3>
<p className="text-jackpot-total">You have &nbsp;<span style={{color:"#FD0093"}}> 0</span> &nbsp;tickets in this round</p>
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

export default Jackpot_Wait;
