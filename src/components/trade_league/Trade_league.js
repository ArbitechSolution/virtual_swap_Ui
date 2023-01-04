import React from "react";
import Trade_bar from "./Trade_bar"
import "./trade.css";
import Trade_leaderboard from "./Trade_leaderboard";
import Trade_timebomb from "./Trade_timebomb";
import Trade_Faq from "./Trade_Faq";

function Trade_league() {
  return (
    <>
    <div className="trade_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="t-trate-virtual">virtual swap : $20,000</div>
            <div className="t-tradeleague">trade-league</div>
            <div className="t-trade-explore">Explore and claim limited</div>
            <div className="row d-flex justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-8 col-12 d-flex justify-content-between border border-primary mb-5">
            <button className="btn-trade-buy">
            Buy Ticket -$1
            </button>
            <button className="btn-trade-view">
            View Rules
            </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Trade_bar/>
    <Trade_leaderboard/>
    <Trade_timebomb/>
    <Trade_Faq/>
    </>
  );
}

export default Trade_league;
