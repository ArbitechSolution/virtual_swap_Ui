import React from "react";
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
                  <a className="nav-link  " aria-current="page" href="/swap">
                    Swap
                  </a>
                  <a className="nav-link" href="/limit">
                    Limit
                  </a>
                  <a className="nav-link" href="/liqudity">
                    Liquidity
                  </a>
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
