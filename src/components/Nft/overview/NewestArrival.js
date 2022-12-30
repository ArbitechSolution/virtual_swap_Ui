import React from 'react'
import Blue from "../../../Assets/Images/Group25.png";
import Pink from "../../../Assets/Images/Group26.png";
import Yellow from "../../../Assets/Images/Group27.png";
import BnbIcon from "../../../Assets/Images/BnbIcon.png";
import Picture from "../../../Assets/Images/Newest-pic.png";

function NewestArrival() {
  return (
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-md-12 mt-5'>
<div className='tN-Arrival'>Newest Arrival</div>
<div className='tDeposit'>
Deposit CAKE to get your Pottery tickets. More CAKE deposited, higher the chance of winning <br/>
(and of course, higher the rewards)! Simple!
</div>

<div className="row d-flex justify-content-between mt-5">
            <div className="col-md-4 border border-primary mt-3">
              <div className="newest-card-1">
                <div className="newest-innerCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Blue} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon1">Name of NFT</div>
                      <div className="t-N-Vol">
                      ($240.00) &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  {/* <div className='tusername ms-3'> User Name</div> */}
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="newest-card-2">
                <div className="newest-innerCard2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Pink} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon2">Name of NFT</div>
                      <div className="t-N-Vol">
                        ($240.00) &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  {/* <div className='tusername ms-3'> User Name</div> */}
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="newest-card-3">
                <div className="newest-innerCard3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Yellow} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon3">Name of NFT</div>
                      <div className="t-N-Vol">
                        ($240.00) &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  {/* <div className='tusername ms-3'> User Name</div>  */}
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="newest-card-1">
                <div className="newest-innerCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Blue} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon1">Name of NFT</div>
                      <div className="t-N-Vol">
                        ($240.00) &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  {/* <div className='tusername ms-3'> User Name</div> */}
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="newest-card-2">
                <div className="newest-innerCard2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Pink} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon2">Name of NFT</div>
                      <div className="t-N-Vol">
                        ($240.00) &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  {/* <div className='tusername ms-3'> User Name</div> */}
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 border border-primary mt-3">
              <div className="newest-card-3">
                <div className="newest-innerCard3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Yellow} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon3">Name of NFT</div>
                      <div className="t-N-Vol">
                        ($240.00) &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  {/* <div className='tusername ms-3'> User Name</div> */}
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="t-viewAll mt-5 mb-5">View All</div>
          </div>
    </div>

    </div>

    </div>
  )
}

export default NewestArrival