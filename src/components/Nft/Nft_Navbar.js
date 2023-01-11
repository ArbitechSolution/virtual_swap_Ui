import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Nft.css"

function Nft_Navbar() {
  const [iscolor, setIsColor] = useState("Overview")
  const { pathname } = useLocation()
  const changePath = () => {

    if (pathname) {
        console.log("pathname", pathname);
        if (pathname == "/Nft_overview") {
            setIsColor("Overview")
        } else if (pathname == "/Nft_collection") {
            setIsColor("Collection")
        }
        else if (pathname == "/Nft_activity") {
            setIsColor("Activity")
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
                <Link className={iscolor == "Overview" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Overivew" onClick={() => setIsColor("Overview")} to="/Nft_overview">
                Overview
                </Link>
                <Link className={iscolor == "Collection" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Collection" onClick={() => setIsColor("Collection")} to="/Nft_collection">
                Collection 
                </Link>
                <Link className={iscolor == "Activity" ? "nav-Nlink-active p-3" : "nav-Nlink p-3"} id="Activity" onClick={() => setIsColor("Activtiy")} to="/Nft_activity">
                Activity
                </Link>
              </div>
            </div>
          </div>
  )
}

export default Nft_Navbar