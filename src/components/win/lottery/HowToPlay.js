import React from "react";
import "./Lottery.css";

function HowToPlay() {
  return (
    <div className="Play_bg mt-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-12   ">
            <div className="row d-flex justify-content-center m-5">
              <div className="text-center t_How">How to Play</div>
              <div className="col-md-5 text-center t_if mt-3">
                If the digits on your tickets match the winning numbers in the
                correct order, you win a portion of the prize pool.Simple!
              </div>
            </div>
            <div className="row d-flex justify-content-around mt-5">
            <div className="col-md-4 How_card1">
            <div className="">
            <div className="row d-flex justify-content-end">
            <div className="how_circle1">
            <div className="thow_circle1 text-center mt-2">
1
            </div>
            </div>

            </div>
            <div className="text-center thow_buy">
            Buy Tickets
            </div>
            <div className="text-center thow_priceAre m-3">
            Prices are set when the round starts, equal to 5 USD in CAKE per ticket.
            </div>
            </div>

            </div>
            <div className="col-md-4 How_card2 ">
            <div className="row d-flex justify-content-end">
            <div className="how_circle2">
            <div className="thow_circle2 text-center mt-2">
2
            </div>
            </div>

            </div>
            <div className="text-center thow_play">
            Play as a team
            </div>
            <div className="text-center thow_priceAre m-3">
            There is one draw every day alternating between 0 AM UTC and 12 PM UTC.
            </div>

            </div>
            <div className="col-md-4 How_card3 ">
            <div className="row d-flex justify-content-end">
            <div className="how_circle3">
            <div className="thow_circle3 text-center mt-2">
3
            </div>
            </div>

            </div>
            <div className="text-center thow_everyone">
            Everyone’s a winner!
            </div>
            <div className="text-center thow_priceAre m-3">
            Once the round’s over, come back to the page and check to see if you’ve won!
            </div>

            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
