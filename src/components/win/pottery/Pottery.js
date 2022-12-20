import React from 'react'
import W_Navbar from '../W_Navbar'
import "./Pottery.css"
function Pottery() {
  return (
    <div className='pottery-bg'>
    <W_Navbar/>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12 mt-5 mb-5' >
<div className='row d-flex justify-content-around'>
<div className='col-md-6 border border-primary'>
<div className='tp-heading'>
<div className='tp-vritual'>
The VirtualSwap Pottery
</div>
</div>
<div className='tp-dollar'>
$18,166
</div>
<div className='tp-to'>
To be won !
</div>
<div>
    <button className='btn-stake-to'>
    Stake to Win
    </button>
</div>

</div>
<div className='col-md-6 pottery-box'>
<div className='p-5  tp-deposit'>
Deposit VS For <span className='tp-blue'>10 weeks </span>
to earn <span className='tp-blue'>13% APY </span> and a 
chance to win prize pot
</div>
<div className='text-center tp-time'>
1D 6H 8M
</div>
<div className='text-center tp-until mb-5'>
Until The Draw    
</div>
</div>
</div>
    </div>

    </div>

    </div>
    </div>
  )
}

export default Pottery