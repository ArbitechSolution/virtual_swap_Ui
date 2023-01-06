import React from 'react'
import Hit_Jacket from './Hit_Jacket'
import "./jacket.css"
import Jackpot_Banner from './Jackpot_Banner'
import Jackpot_How_To from './Jackpot_How_To'
import Jackpot_Rules from './Jackpot_Rules'
import Jackpot_Wait from './Jackpot_Wait'

function index() {
  return (
    <div>
        <Hit_Jacket/>
        <Jackpot_Banner/>
        <Jackpot_Wait/>
        <Jackpot_How_To/>
        <Jackpot_Rules/>
    </div>
  )
}

export default index