import React from 'react'
import faceIcon from "../../Assets/Images/uu3.png"

function Jackpot_How_To() {
  return (
    <div className='jackpot_bg mt-5 jackpot-mbl-responsive'>

    <div className='container'>
    <div className='row'>
    <div className='col-md-12 mt-5 mb-5'>
    <div className='row'>
<h2 className='t-how-toGet'>
How to get new tickets?
</h2>
<p className='t-more-tickets'>
More tickets, more chances of winning.
</p>
    </div>
    <div className='row d-flex justify-content-center'>
    <div className='col-md-6'>
    <div className='jackpot-how-box'>
    <div className='row m-4'>
    <h3 className='t-keep-on mt-5'>
    Keep on Opening PandoBoxes or Upgrading DroidBots
    </h3>
    <p className='t-upon-opening'>
    Upon opening up a PandoBox or upgrading a DroidBot, users are given free tickets.
    </p>
    <div className='d-flex justify-content-around mt-4'>
    <button className='btn-buyBox'>buy VS Box</button>
    <button className='btn-buyBox'>Upgrade droibot</button>
    </div>
    
    </div>

    </div>

    </div>
    <div className='col-md-6'>
    <div className='jackpot-how-box2'>
    <div className='row m-4'>
    <div className='text-center mt-4'>
    <img src={faceIcon} className="img-fluid" width={"60px"}>
    </img>
    </div>
    <p className='t-upon-opening mt-2'>
    Boost your odds of winning by purchasing more tickets.
    </p>
    <div className='d-flex justify-content-center mt-4'>
    <button className='btn-buyTickets'>buy tickets</button>
    </div>
    
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

export default Jackpot_How_To