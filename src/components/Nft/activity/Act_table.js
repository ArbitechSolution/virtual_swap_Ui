import React from "react";
import "./Activity.css"

function Act_table() {
    const data=[
        {
            coin:"Lil Bulls",
            coinD:"Lil Bulls #2680",
            event:"Modified",
            price:"20.21",
            priceD:"(-99.90)",
            from:"0xc0...d1ce",
            form1:"BossesCrosses",
            to:"-",
            date:"12/9/2022, 11:24 AM"
        },
    ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row mt-5">
          <div className="col-md-6 d-flex justify-content-around align-items-center act-btn-responsive">
          <div className="t-filtered">
            Filtered By:
          </div><button type="button" class=" btn-act">Collection</button>
<button type="button" class="btn-act">Listed</button>
<button type="button" class=" btn-act">Sold</button>
<button type="button" class=" btn-act">Modified</button></div>
<div className="col-md-6 d-flex justify-content-end align-items-center act-btn-responsive">
<button type="button" class=" btn-ref">Refresh</button></div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-10">
            <table>
                {
                    data.map((data)=>{
                        return(
                            <>
                                <tr>
                                    <td>
                                        {data.coin}<br/>
                                        {data.coinD}
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
  );
}

export default Act_table;
