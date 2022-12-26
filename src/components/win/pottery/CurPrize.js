import React from "react";

function CurPrize() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 border border-primary">
              <div className="curPrize-box">
                <div className="row d-flex justify-content-end me-2">
                  <div className="btn-CurPrize">
                    <button type="button" className="btn-deposit">
                      Deposit
                    </button>
                    <button type="button" className="btn-deposit">
                      Claim
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 p-5">
                    <div className="tPottery">Pottery</div>
                    <div className="tstakeCake">
                      Stake CAKE, Earn CAKE, Win CAKE
                    </div>
                    <div className="Cur-input">

                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6 border border-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurPrize;
