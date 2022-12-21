import React from "react";
import { Link } from "react-router-dom";

function E_Navbar() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
      <div className="col-md-12 d-flex justify-content-center Navbar-border nav-hover">
      <Link className="nav-link p-3" to="/farms">
                    FARMS
                  </Link>
                  <Link className="nav-link p-3" to="/pool">
                    Pool
                  </Link>
          {/* <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav nav-hover">
                  <Link className="nav-link"  to="/swap" aria-current="page" >
                    Swap
                  </Link>
                  <Link className="nav-link" to="/limit">
                    Limit
                  </Link>
                  <Link className="nav-link" to="/liqudity">
                    Liquidity
                  </Link>
                </div>
              </div>
            </div>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default E_Navbar;
