import React from 'react'
import blue from "../../Assets/Images/Group25.png"
import pink from "../../Assets/Images/Group26.png"
import yellow from "../../Assets/Images/Group27.png"
import picture from "../../Assets/Images/legend-pic.png"

function Legend_Round() {
  return (
    <div className='legend_bg'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12 mt-5'>
    <div>
    <h3 className='t-round-timeline text-center'>
    ROund 3
    </h3>
    <p className='t-timeline-if'>
    If the digits on your tickets match the winning numbers in the correct <br/>
order, you win a portion of the prize pool.Simple!
    </p>
    </div>
    <div className='row  d-flex justify-content-between mt-5'>
    <div className='col-md-3 border border-primary'>
<div className='round-box'>
<div>
</div>


<div>
Buy Tickets
Prices are set when the round starts, equal to 5 USD in CAKE per ticket.
</div>

</div>
    </div>
    <div className='col-md-3 border border-primary'>
    <div className='round-box2'>
    <div className='img-legend'>
<img src={pink} className="img-fluid" width={"72px"}/>
</div>


</div>
    </div>
    <div className='col-md-3 border border-primary'>
    <div className='round-box3'>
    <div className='img-legend'>
<img src={yellow} className="img-fluid" width={"72px"}/>
</div>

</div>
    </div>


    </div>
    </div>

    </div>

    </div>

    </div>
  )
}

export default Legend_Round