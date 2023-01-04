import React from 'react'
import { Link } from "react-router-dom";

function Info_Navbar() {
  return (
    <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-12 d-flex justify-content-center Navbar-border nav-hover">
                {/* <Link className="nav-link p-3" to="/Nft">
                Overview
                </Link>
                <Link className="nav-link p-3" to="/collection">
                Collection 
                </Link>
                <Link className="nav-link p-3" to="/activity">
                Activity
                </Link> */}
                <Link className='nav-link p-3' to="/info_stable">
                  Swap
                </Link>
                <Link className='nav-link p-3' to="/Info_stableSwap">
                  Stable Swap
                </Link>
              </div>
            </div>
          </div>
  )
}

export default Info_Navbar