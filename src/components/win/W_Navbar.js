import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./W_Navbar.css"

function W_Navbar() {
  const [iscolor, setIsColor] = useState("Trading Competition")
  const { pathname } = useLocation()
  const changePath = () => {

    if (pathname) {
        console.log("pathname", pathname);
        if (pathname == "/Win_latest") {
            setIsColor("Trading Competition")
        } else if (pathname == "/Win_prediction") {
            setIsColor("Prediction")
        }
        else if (pathname == "/Win_lottery") {
            setIsColor("Lottery")
        }
        else if (pathname == "/Win_pottery"){
          setIsColor("Pottery")
        }
    }
}

useEffect(() => {
    changePath()
})
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center Navbar-border nav-hover">
                  <Link className={iscolor == "Trading Competition" ? "nav-Nlink-active  p-2" : "nav-Nlink W_Navbar p-2"} id="Trading Competition" onClick={() => setIsColor("Trading Competition")} to="/Win_latest">
                  Trading Competition
                  </Link>
                  <Link className={iscolor == "Prediction" ? "nav-Nlink-active p-2" : "nav-Nlink  W_Navbar p-2"} id="Prediction" onClick={() => setIsColor("Prediction")} to="/Win_prediction">
                    Prediction
                  </Link>
                  <Link className={iscolor == "Lottery" ? "nav-Nlink-active p-2" : "nav-Nlink  W_Navbar p-2"} id="Lottery" onClick={() => setIsColor("Lottery")} to="/Win_lottery">
                    Lottery
                  </Link>
                  <Link className={iscolor == "Pottery" ? "nav-Nlink-active p-2" : "nav-Nlink W_Navbar  p-2"} id="Pottery" onClick={() => setIsColor("Pottery")} to="/Win_pottery">
                    Pottery
                  </Link>
                </div>
              </div>
            </div>
  );
}

export default W_Navbar;
