import React from 'react'
import { Link } from "react-router-dom";

function E_Navbar() {
  return (
    <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-12 d-flex justify-content-center Navbar-border">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav nav-hover">
                <Link className="nav-link"  to="/farms" aria-current="page" >
                  FARMS
                </Link>
                <Link className="nav-link" to="/">
                  Pool
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default E_Navbar