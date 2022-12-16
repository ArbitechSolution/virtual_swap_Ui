import React from 'react'

function Finished() {
  return (
    <div className='container'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='row'>
    <div className='col-md-6 Fininshed-box'>
    <div className='row mt-4'>
    <div className='col-md-12 d-flex justify-content-between'>

    <div className='tfinished'>
    Finished Rounds
    </div>
    <div>
    <div className="btn-group-finished" role="group" aria-label="Basic example">
  <button type="button" className="btn-finish">All History</button>
  <button type="button" className="btn-finish ">Your History</button>
</div>

    </div>
    </div>
    </div>

    </div>
    <div className='col-md-6'></div>
    </div>
    </div>
    </div>

    </div>
  )
}

export default Finished