import React from "react";
import faceIcon from "../../Assets/Images/logo.png"

function Trade_leaderboard() {

const data =[
    {
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },
    {
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },
    {
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },
    {
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },
    {
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },
    {
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },{
        no:"Eligible trading pairs",
        address:"0xk...w38h",
        reward:"$150",
        icon:faceIcon
    },

]


  return (
    <div className="container">
      <div className="row  d-flex justify-content-center mt-5">
        <div className="col-md-12 border border-primary">
          <div className="t-trade-leader">Leaderboard</div>
          <div className="t-trade-top">
            Top traders by 30-day rolling hashrate average
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 border border-primary mt-5">
              <div className="d-flex justify-content-between align-items-center leader-responsive">
                <div className="t-trade-last">
                  Last Updated: Sep 15, 2022 00:58 (GMT-7)
                </div>
                <div>
                  <input
                    className="trade-input"
                    placeholder="SEARCH WALLET"
                  ></input>
                </div>
              </div>

              <div className="table_over">
              <table className="table table-responsive">
              <tr className="trade-table-heading ">
                <th scope="col">
                No.
                </th>
                <th scope="col">
                Address
                </th>
                <th scope="col">
                    Reward
                </th>
              </tr>
              {
                data.map((data)=>{
                    return(
                        <>
                            <tr className="data-trade-table">
                                <td>
                                    {data.no}
                                </td>
                                <td>
                               <img src= {data.icon} className="img-fluid" width={"30px"}/> &nbsp;
                                    {data.address}
                                </td>
                                <td>
                                    {data.reward}
                                </td>
                            </tr>
                        </>
                    )
                })
              }

              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade_leaderboard;
