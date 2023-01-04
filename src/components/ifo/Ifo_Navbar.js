import React from 'react'

function Ifo_Navbar() {
    return (
        <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex justify-content-center Navbar-border nav-hover">
                    <Link className='nav-link p-3' to="/info_stable">
                      Latest
                    </Link>
                    <Link className='nav-link p-3' to="/Info_stableSwap">
                      Finished
                    </Link>
                  </div>
                </div>
              </div>
      )
}

export default Ifo_Navbar