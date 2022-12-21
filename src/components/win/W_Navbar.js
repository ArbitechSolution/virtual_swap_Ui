import React from "react";
import { Link } from "react-router-dom";

function W_Navbar() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center Navbar-border nav-hover">
                  <Link className="nav-link p-3" to="/latest">
                    Latest
                  </Link>
                  <Link className="nav-link p-3" to="/pools">
                    Pools
                  </Link>
                  <Link className="nav-link p-3" to="/prediction">
                    Prediction (BETA)
                  </Link>
                  <Link className="nav-link p-3" to="/lottery">
                    Lottery
                  </Link>
                  <Link className="nav-link p-3" to="/pottery">
                    Pottery(BETA)
                  </Link>
                </div>
              </div>
            </div>
  );
}

export default W_Navbar;
