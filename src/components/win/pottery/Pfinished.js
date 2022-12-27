import React from "react";
import "./Pottery.css";
import Face_icon from "../../../Assets/Images/logo.png";

function Pfinished() {
  return (
    <div className="Finished_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 border border-primary">
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-md-6 border border-primary">
                <div className="t-Pfinished">Finished Rounds</div>
                <div className="t-Pif">
                  If the digits on your tickets match the winning numbers in the
                  correct order, you win a portion of the prize pool.Simple!
                </div>
                <div className="row d-flex justify-content-center mt-5 mb-5">
                  <div className="col-md-12 Pfinished-box">
                    <div className="row mt-3 d-flex justify-content-center">
                      <div className="col-md-6 border border-primary">
                        <div className="t-PF-round">Round</div>
                        {/* <div>
                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href=""
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">«</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href=""
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">»</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div> */}
                      </div>
                      <div className="col-md-6 border border-primary ">
                        <div className="d-flex flex-column">
                          <div className=" PF-Drawnbox p-1">
                            <p>Drawn Dec 9, 2022, 4:00 AM</p>
                          </div>
                          <div className="PF-Drawnbox mt-3 p-1">
                            <p>Total players this round: 1,272</p>
                          </div>
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center mt-3">
                        <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                          <div className="PF-Winnerbox">
                            <div className="text-white ms-4 t-Pf-winner">
                              Winner
                            </div>
                            <div className="row d-flex justify-content-between p-2 Pf-responsive">
                              <div className="col-sm-3 col-lg-3 Pf-box ">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-sm-3 col-lg-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 col-lg-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 Pf-box">
                                <div className="d-flex flex-row justify-content-between ">
                                  <div className="Pf-icon-bg">
                                    <img
                                      src={Face_icon}
                                      className="img-fluid ms-1 "
                                      width={"20px"}
                                    />
                                  </div>
                                  <div className="t-GoodName mt-2">
                                    Good Name
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tPottery text-end mt-2">
                            Pottery deposited on: Dec 5, 2022, 4:00 PM
                            </div>
                            <div className="t-Pf-Prize text-end">
                            Prize Pot &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <span className="t-Pf-usd">~$1,816 450 VS</span>
                            </div>
                            <div className="row d-flex justify-content-center mt-5">
                            <button className="btn-Pf-view">View  on bscscan</button>

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
        </div>
      </div>
    </div>
  );
}

export default Pfinished;
