import React from 'react'
import W_Navbar from '../W_Navbar'
import Finished from './Finished'
import HowToPlay from './HowToPlay'
import "./Lottery.css"
import LotteryTicket from './LotteryTicket'
import PrizeFunds from './PrizeFunds'
import StillQuestion from './StillQuestion'
import Wining from './Wining'

function Lottery() {
  return (
    <>

    <div className='lottery-bg'>
    {/* <W_Navbar/> */}
    <LotteryTicket/>
    </div>
    <Finished/>
    <HowToPlay/>
    <Wining/>
    <PrizeFunds/>
    <StillQuestion/>
    </>
  )
}

export default Lottery