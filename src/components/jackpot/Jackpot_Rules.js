import React from "react";

function Jackpot_Rules() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12   mt-5 mb-5">
          <h2 className="text-jackpot-general">General rules</h2>
          <p className="text-jackpot-para mt-4">
            The actual cost in PAN of each ticket will be calculated based on
            the PAN/USD price at the time of purchase. Up to 100 tickets can be
            purchased in a single transaction, but there is no limit to the
            number of tickets you can possess.
            <p className="text-jackpot-para">
              In addition to 10% of the total supply of PSR, 20% of swap fees,
              and 20% of PandoMarket commissions, all the PAN proceeds from
              ticket sales will be allocated to the Total Prize Pool (the
              “Pool”) to fund the jackpot prizes.
            </p>
            <p className="text-jackpot-para">
              There are 3 types of jackpot prizes – Mega (25% of the Pool),
              Minor (0.5% of the Pool), and Mini (0.075% of the Pool). In each
              round, there are 2 Mega winning numbers, 2 Minor winning numbers,
              and 4 Mini winning numbers.
            </p>
            <p className="text-jackpot-para">
              To win a Mega Prize, all the 6 digits on your ticket must match
              either of the Mega winning numbers in the correct order.
            </p>
            <p className="text-jackpot-para">
              Similarly, if your last 4 digits match either of the Minor winning
              numbers in the correct order, you will win a Minor Prize. In case
              your last 3 digits match any of the Mini winning numbers in the
              exact same sequence, you will win a Mini Prize.
            </p>
            <p className="text-jackpot-para">
              Mega, Minor, and Mini Prizes will be split equally among their
              respective winning tickets.
            </p>
            <p className="text-jackpot-para">
              A user can win several prizes in a drawing. There can be no
              winners within a round.
            </p>
            <p className="text-jackpot-para">
              There is one draw every hour. Once the round is over, come back to
              the page to check the results.
            </p>
            <p className="text-jackpot-para">
              All prizes will be paid out in three currencies: PSR, PAN, and
              BUSD.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jackpot_Rules;
