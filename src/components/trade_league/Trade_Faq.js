import React from 'react'

function Trade_Faq() {
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
    
  return (
    <div className='container trade_faq_margin'>
    <div className='row'>
    <div className='col-md-12   '>
    <div className='row mt-5'>
    <div className='col-md-6'>
<h3 className='t-generalrule'>
General rules
</h3>
<p className='t-the-faq'>
The Mega Jackpot is associated with a 60-day countdown timebomb. If nobody has claimed the Mega Jackpot before the countdown reaches zero, the timebomb will explode. The Mega Jackpot will then be distributed amongst the top 50 of the Leaderboard.
</p>
<p className='t-the-faq'> 
Each user in the top 50 of the Leaderboard will earn a share of the Mega Jackpot proportional to their 30-day hashrate average at the time the timebomb exploded.
The 30-day hashrate average of each trader and their respective ranking are calculated and updated to the Leaderboard every 5 minutes.
</p>
<p className='t-the-faq'>
The timebomb will automatically reset to 60 days every time someone won the Mega Jackpot.
</p>
    </div>
    <div className='col-md-6 d-flex justify-content-center'>
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

export default Trade_Faq