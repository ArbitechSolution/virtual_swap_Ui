import React from "react";
import { Link } from "react-router-dom";
import "./TradeNavber.css";

function TradeNavbar() {
    
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center Navbar-border">
          <nav className="navbar navbar-expand-lg">
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
                  <a className="nav-link" href="#">
                    Perpetual
                  </a>
                  <a className="nav-link" href="#">
                    Bridge
                  </a>
                  <a className="nav-link disabled">Disabled</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TradeNavbar;
