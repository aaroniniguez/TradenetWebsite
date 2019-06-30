import React, { Component } from 'react'
import Payout from './payout';
import Referral from './Referral';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="payout">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <h2>How the payout system works:</h2>
				<p>
					Firstly, cause I know this is always a hot subject, yes Tradenet does pay out and I've never had an issue with getting a payout and I've gotten over $20k in payouts.
					With that being said, let me go into the details( you can see my payouts below). Tradenet has kind of a weird/complex method of payout so be sure to know all the rules!<br />
					
					<ul>
						<li> You can only request a payout once a month</li>
						<li> You can request a payout from the 1st of the month until the 10th of the month.</li>
						<li> You can only request a payout from profits you made the PRIOR months (NOT including the current months profits)</li>
						<li> Minimum payout amount is $200</li>
						<li> If you lose more money than the payout you requested , the payout will become invalid. (So if last month you made 1k, and then this month you don't trade from the 1st to the 10th and then you request a 
						payout of 1k on the 10th , then on the 11th you trade and lose $200, then your payout is no longer valid.)</li>
						<li> You can request a payout by going to:  </li>
						<a target="_blank" href="https://tefsec.com/payout-request/">https://tefsec.com/payout-request/</a>
					</ul>
				</p>
				<p>
					From my experience, if you submit a payout request from the 1st to the 10th of the month(inclusive) , then the money comes OUT of your TRADENET account balance on the 15th of the month 
					 and INTO your bank account up to 5 days AFTER the 15th.
				</p>
				<p>
					In special cases you can even contact Tradenet if you miss your payout period, for instance I got a payout on the 1st of March 2019. 
					<img style={{width:"420px"}} src="/images/Payouts/PayoutSpecialCase.png" alt="PayoutBeginningOfMarch"></img>
				</p>
				<Referral />
			  </div>
		  	</div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
				
					<h2>Proof of Profits</h2>
					<Payout month="April"  year="2019" />
					<Payout month="March"  year="2019" />
					<Payout month="January"  year="2019" />
					<Payout month="November" year="2018" />
					<Payout month="October" year="2018" />
					<Payout month="September" year="2018" />
					<Payout month="June" year="2018" />
				  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
