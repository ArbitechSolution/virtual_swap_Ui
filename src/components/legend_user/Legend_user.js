import React from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import "./legend.css";
import Legend_Rect from "./Legend_Rect";
import Legend_Round from "./Legend_Round";
import Legend_timeline from "./Legend_timeline";
function Legend_user() {
  return (
    <>
      <div className="">
        <div className="container legend_bg w-100">
          <div className="row">
            <div className="col-md-12 mt-5 mb-5">
            <div>
              <h3 className="t-legend-prize">Prize Pool : $20,000</h3>
              <h1 className="t-legend-user">Legend User</h1>
              <p className="t-legend-explore">Explore and claim limited</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Legend_Rect/>
      <Legend_timeline/>
      <Legend_Round/>
    </>
  );
}

export default Legend_user;
