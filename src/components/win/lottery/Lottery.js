import React from 'react'
import W_Navbar from '../W_Navbar'
import Finished from './Finished'
import "./Lottery.css"
import LotteryTicket from './LotteryTicket'

function Lottery() {
  return (
    <>

    <div className='lottery-bg'>
    <W_Navbar/>
    <LotteryTicket/>
    </div>
    <Finished/>
    </>
  )
}

export default Lottery