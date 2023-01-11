import React from 'react'

import Video from "../../../Assets/transparent_1.gif"
const data=[
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
    {
        pair:"Eligible trading pairs",
        pairdetail:"Detail"
    },
]

function Nft_Faq() {
  return (
    <div className="container mt-5 mb-5">
    <div className='row'>
    <div className='col-md-12 mt-5  '>
    <div className='row d-flex justify-content-center align-items-center'>
    <div className='col-md-6   Fax-responsive'>
    <img src={Video} className="img-fluid" width={"4000px"}/>
    </div>
    <div className='col-md-6  '>
    <div className='PF-box'>
    <div className='t-Fax'>
    FAQ
    </div>
    <table>
    {
        data.map((data)=>{
            return(
                <>
                    <tr className=''> 
                    <td className='PF-table p-3'>
                    {data.pair}
                    </td>
                    <td className='PF-detail p-3'>{data.pairdetail}</td>
                    </tr>
                </>
            )
        })
    }
    </table>

    </div>

</div>
    </div>
    </div>

    </div>

    </div>
  )
}

export default Nft_Faq