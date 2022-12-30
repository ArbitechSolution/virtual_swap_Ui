import React from "react";
import Nft_Navbar from "../Nft_Navbar";
import "./Activity.css";
import Act_table from "./Act_table";

function Activity() {
  return (
    <>

    <div className="activity_bg">
    <Nft_Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="tactivity mb-5 mt-5">Activity</div>
          </div>
        </div>
      </div>
    </div>
    <Act_table/>
    </>
  );
}

export default Activity;
