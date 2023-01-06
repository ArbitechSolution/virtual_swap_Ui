import React from "react";
import line from "../../Assets/Images/Group30.png";

function Legend_timeline() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="">
              <h2 className="t-legend-timeline">Legend User’s Timeline</h2>
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-md-8 line">
                <img src={line} className="img-fluid" />
              </div>
              <div className="col-md-10">
                <div className="row d-flex justify-content-between mt-2">
                  <div className="col-md-3 border border-primary">
                    <div className="t-timeline-legend">
                      <div className="t-date-timeline">27 OCT-03 NOV 2022</div>
                      ROUND 1 - WARM UP $4,250
                    </div>
                  </div>
                  <div className="col-md-3 border-primary">
                    <div className="t-timeline-legend">
                      <div className="t-date-timeline">27 OCT-03 NOV 2022</div>
                      ROUND 1 - WARM UP $4,250
                    </div>
                  </div>
                  <div className="col-md-3 border-primary">
                    <div className="t-timeline-legend">
                      <div className="t-date-timeline">27 OCT-03 NOV 2022</div>
                      ROUND 1 - WARM UP $4,250
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="t-timeline-read text-center mt-3">
            Read Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legend_timeline;
