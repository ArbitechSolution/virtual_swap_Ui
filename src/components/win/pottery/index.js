import React from 'react'
import Pottery from './Pottery'
import CurPrize from "./CurPrize";
import Pfinished from "./Pfinished";
import "./Pottery.css";
import HowToPlay from "./HowToPlay";
import Split from "./Split";
import PFax from "./PFax";
import W_Navbar from '../W_Navbar';

function index() {
  return (
    <div>
    <div className='pottery-bg'>
    <W_Navbar/>
        <Pottery/>
    </div>
        <CurPrize/>
    <Pfinished/>
    <HowToPlay/>
    <Split/>
    <PFax/>
        
    </div>
  )
}

export default index