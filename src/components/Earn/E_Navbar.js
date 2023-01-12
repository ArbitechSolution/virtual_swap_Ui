import React from "react";
import { Link, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";

function E_Navbar() {
  const [iscolor, setIsColor] = useState("Farms")
  const { pathname } = useLocation()
  const changePath = () => {

    if (pathname) {
        console.log("pathname", pathname);
        if (pathname == "/farms") {
            setIsColor("Farms")
        } else if (pathname == "/pool") {
            setIsColor("Pool")
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
      <Link className={iscolor == "Farms" ? "nav-Nlink-active  p-2" : "nav-Nlink p-3"} id="Farms" onClick={() => setIsColor("Farms")} to="/farms">
                    Farms
                  </Link>
                  <Link className={iscolor == "Pool" ? "nav-Nlink-active  p-3" : "nav-Nlink p-3"} id="Pool" onClick={() => setIsColor("Pool")} to="/pool">
                    Pool
                  </Link>
        </div>
      </div>
    </div>
  );
}

export default E_Navbar;
