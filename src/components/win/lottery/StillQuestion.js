import React from 'react'
import Picture from "../../../Assets/Images/34445-01.png"

function StillQuestion() {
  return (
    <div className='Still_bg'>

    <div className='container still-margin'>
    <div className='row'>
<div className='col-md-12 '>
<div className='row'>
<div className='col-lg-8 col-md-12 mt-5'>
<div className='t-still'>
Still got questions?
</div>
<div className='t-check-our'>
Check our in-depth guide on 
</div>
<div className='t-how-play'>
how to play the  <span className='t-vritual'> VirtualSwap</span> lottery!
</div>
</div>
<div className='col-lg-4      d-flex justify-content-end'>
<img src={Picture} className="img-fluid last-picture" width={"300px"}/>
</div>

</div>
</div>
    </div>
    </div>

    </div>
  )
}

export default StillQuestion