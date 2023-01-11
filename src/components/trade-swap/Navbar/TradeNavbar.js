import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";


import "./TradeNavber.css";

function TradeNavbar() {
  const [iscolor, setIsColor] = useState("Swap")
  const { pathname } = useLocation()
  const changePath = () => {

    if (pathname) {
        console.log("pathname", pathname);
        if (pathname == "/Trade_Swap") {
            setIsColor("Swap")
        } else if (pathname == "/trade_limit") {
            setIsColor("Limit")
        }
        else if (pathname == "/trade_liqudity") {
            setIsColor("Liqudity")
        }
    }
}

useEffect(() => {
    changePath()
})
    
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 d-flex justify-content-center Navbar-border nav-hover">
        <Link className={iscolor == "Swap" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Swap" onClick={() => setIsColor("Swap")}  to="/Trade_Swap" aria-current="page" >
                    Swap
                  </Link>
                  <Link className={iscolor == "Limit" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Limit" onClick={() => setIsColor("Limit")} to="/trade_limit">
                    Limit
                  </Link>
                  <Link className={iscolor == "Liqudity" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Liqudity" onClick={() => setIsColor("Liqudity")} to="/trade_liqudity">
                    Liquidity
                  </Link>
        </div>
      </div>
    </div>
  );
}

export default TradeNavbar;
