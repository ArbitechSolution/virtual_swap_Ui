import React from "react";
import "./Latest.css";
import successIcon from "../../../Assets/Images/Win/success3.png";
import PrizeIcon from "../../../Assets/Images/Win/Prizes.png";
function PrizeByTeam() {
  const data = [
    {
      rank: "2 ~ 10",
      tier: "Gold",
      token: "$10,800",
      achievement: "+2,500",
      nft: successIcon,
    },
    {
      rank: "2 ~ 10",
      tier: "Gold",
      token: "$10,800",
      achievement: "+2,500",
      nft: successIcon,
    },
    {
      rank: "2 ~ 10",
      tier: "Gold",
      token: "$10,800",
      achievement: "+2,500",
      nft: successIcon,
    },
    {
      rank: "2 ~ 10",
      tier: "Gold",
      token: "$10,800",
      achievement: "+2,500",
      nft: successIcon,
    },
    {
      rank: "2 ~ 10",
      tier: "Gold",
      token: "$10,800",
      achievement: "+2,500",
      nft: successIcon,
    },
  ];
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 Prize-box">
              <div className="text-center">
                <h3 className="t-prize">Prizes by Team</h3>
                <p className="t-higher">
                  {" "}
                  Higher trading volume = higher rank!
                </p>
              </div>
              <div className="row ">
                <div
                  className="btn-groupPRize d-flex"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn-PrizeBy ">
                    Team 1
                  </button>
                  <button type="button" className="btn-PrizeBy">
                    Team 2
                  </button>
                  <button type="button" className="btn-PrizeBy ">
                    Team 3
                  </button>
                  <button type="button" className="btn-PrizeBy">
                    Team 4
                  </button>
                </div>
              </div>
              <div className="row">
                <table>
                  <tr className="t-heading">
                    <th>Rank in Team</th>
                    <th>TIER</th>
                    <th>TOKEN PRIZES (SPLIT)</th>
                    <th>ACHIEVEMENTS</th>
                    <th>NFT</th>
                  </tr>
                  {data.map((data) => {
                    return (
                      <>
                        <tr className="t-data">
                          <td>{data.rank}</td>
                          <td>
                            <span className="t-tier">{data.tier} </span>
                          </td>
                          <td>{data.token}</td>
                          <td>{data.achievement}</td>
                          <td>
                            <img
                              src={data.nft}
                              className="img-fluid"
                              width={"20px"}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row d-flex justify-content-center align-items-center margin-team">
                <div className="text-prizes">
                  <img src={PrizeIcon} className="img-fluid" />
                  <span className="">Prizes</span>
                </div>
                <div className="t-every">
                  Every eligible participant will win prizes at the end of the
                  competition.
                </div>
                <div className="t-better">
                  The better your team performs, the better prizes you will get!
                </div>
                <div className="t-final">
                  The final winning team will be the team with the highest total
                  volume score at the end of the competition period.In addition
                  to token prizes there are NFT rewards:
                </div>
                <div className="t-newly p-3">
                  <span className="t-a">A.</span> 300 newly-designed PancakeSwap
                  NFTs to the Top 100 Traders in each team.
                </div>
                <div className="t-newly p-3">
                  <span className="t-a"> B.</span> 100 Mines of Dalarnia NFTs to
                  the Top 100 Traders ranked by the $DAR Trading Volume.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeByTeam;
