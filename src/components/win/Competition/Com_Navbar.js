import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Com_Navbar() {
  const [iscolor, setIsColor] = useState("Latest")
  const { pathname } = useLocation()
  const changePath = () => {

    if (pathname) {
        console.log("pathname", pathname);
        if (pathname == "/Win_latest") {
            setIsColor("Latest")
        } else if (pathname == "/Win_Finished") {
            setIsColor("Finished")
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
                  <Link className={iscolor == "Latest" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Latest" onClick={() => setIsColor("Latest")} to="/Win_latest">
                    Latest
                  </Link>
                  <Link className={iscolor == "Finished" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Finished" onClick={() => setIsColor("Finished")} to="/Win_Finished">
                    Finished
                  </Link>
                </div>
              </div>
            </div>
  )
}

export default Com_Navbar