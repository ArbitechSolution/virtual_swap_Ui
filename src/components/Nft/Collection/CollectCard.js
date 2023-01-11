import React from 'react'
import Blue from "../../../Assets/Images/Group25.png";
import Pink from "../../../Assets/Images/Group26.png";
import Yellow from "../../../Assets/Images/Group27.png";
import BnbIcon from "../../../Assets/Images/BnbIcon.png";
import Picture from "../../../Assets/Images/Newest-pic.png";

function CollectCard() {
  return (
    <div className='container collect-margin'>
    <div className='row'>
    <div className='col-md-12 '>

    <div className="row d-flex justify-content-between">
            <div className="col-md-4   mt-3">
              <div className="newest-card-1">
                <div className="newest-innerCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Pink} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon1">Moon pets</div>
                      <div className="t-N-Vol">
                        Volume &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   mt-3">
              <div className="newest-card-2">
                <div className="newest-innerCard2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Blue} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon2">Moon pets</div>
                      <div className="t-N-Vol">
                        Volume &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   mt-3">
              <div className="newest-card-3">
                <div className="newest-innerCard3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Yellow} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon3">Moon pets</div>
                      <div className="t-N-Vol">
                        Volume &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   mt-3">
              <div className="newest-card-1">
                <div className="newest-innerCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Pink} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon1">Moon pets</div>
                      <div className="t-N-Vol">
                        Volume &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   mt-3">
              <div className="newest-card-2">
                <div className="newest-innerCard2">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Blue} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon2">Moon pets</div>
                      <div className="t-N-Vol">
                        Volume &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   mt-3">
              <div className="newest-card-3">
                <div className="newest-innerCard3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={Yellow} className="img-fluid" width={"74px"} />
                    </div>
                    <div className="d-flex flex-column p-3">
                      <div className="t-moon3">Moon pets</div>
                      <div className="t-N-Vol">
                        Volume &nbsp;
                        <img
                          src={BnbIcon}
                          className="img-fluid"
                          width={"14px"}
                        />{" "}
                        &nbsp;&nbsp; 298
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src={Picture} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="t-viewAll mt-5">View All</div>
          </div>

    </div>

    </div>
    </div>
  )
}

export default CollectCard