import React from 'react'
import Nft_Navbar from '../Nft_Navbar'
import "./Collection.css"

import CollectCard from './CollectCard';

function Collection() {
  return (
    <>
    <div className='collection_bg'>
    <div>
    <Nft_Navbar/>
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-md-12 mt-5'>
    <div className='mb-5 t-collections'>
    Collections
    </div>
    </div>
    </div>

    </div>

    </div>

    </div>
    <CollectCard/>
    </>
  )
}

export default Collection