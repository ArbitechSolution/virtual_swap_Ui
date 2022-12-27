import React from "react";

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
                    <div className="row mt-5 d-flex justify-content-center">
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
  <div className=" PF-Drawnbox p-1"><p>Drawn Dec 9, 2022, 4:00 AM</p></div>
  <div className="PF-Drawnbox mt-3 p-1"><p>Total players this round: 1,272</p></div>
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
