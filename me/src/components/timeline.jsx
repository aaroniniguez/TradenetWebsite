import React, { Component } from 'react'
import Payout from './payout';
import Referral from './Referral';
import Header from './Header'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="payout">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
			  <Header title="How the payout system works!" />
				<p>
					Firstly, because I know this is always a hot topic, yes Tradenet DOES pay out and I've never had an issue with getting a payout and I've gotten over $20k in payouts.
					With that being said, let's go into the details of how to actually get a payout( you can see my payouts below)! Tradenet has kind of a weird/complex method of payout so be sure to know all the rules!<br />
					
					<ul>
						<li> You can only request a payout once a month</li>
						<li> You can request a payout from the 1st of the month until the 10th of the month.</li>
						<li> You can only request a payout from profits you made the PRIOR months (NOT including the current months profits)</li>
						<li> Minimum payout amount is $200</li>
						<li> If you lose more money than the payout you requested , the payout will become invalid. (So if last month you made 1k, and then this month you don't trade from the 1st to the 10th and then you request a 
						payout of 1k on the 10th , then on the 11th you trade and lose $200, then your payout is no longer valid.) This is a really annoying rule and I've seen my friends make $10k, and 
						not be able to cash out because they traded and lost past their payout amount. I HIGHLY recommend not trading until you get your payout , if the payout is large enough
						to warrant not trading for 2 weeks. When I wired out $9k I literally didn't trade for 2 weeks and just waited for my payout because I did not want to risk my payout becoming invalid.</li>
					</ul>
					<h2>Where do I request a payout?</h2>
						<p>
							You can request a payout by going to:
							<br/>
							<a target="_blank" href="https://tefsec.com/payout-request/">https://tefsec.com/payout-request/</a>
						</p>
				</p>
				<p>
					<h2>When do I get my money?</h2>
					From my experience, if you submit a payout request from the 1st to the 10th of the month(inclusive) , then the money comes OUT of your TRADENET account balance on the 15th of the month 
					 and INTO your bank account up to 5 days AFTER the 15th.
					In special cases, you can even contact Tradenet customer service if you miss the normal payout period. For instance, I got a payout on the 1st of March 2019.<br/> 
				</p>
				<p style={{textAlign:"center"}}>
					<img style={{width:"840px"}} src="/images/Payouts/TradenetPayoutSpecialCase.png" alt="Payout Beginning Of March"></img>
				</p>
				<Referral />
			  </div>
		  	</div>
            <div className="row">
				<p>
					Anyway, on to the more interesting stuff, the payouts themselves! You'll notice I had a really good month in October 2018 and got a fat payout of $9k in November, 
					this was due to the market being incredibly volatile in October as it looked like the market was going to have a massive reversal. That month I traded mainly UVXY on the long
					and short side and made a killing every day (I think I was averaging around $1k on my winning days and -$1k on my losing days with a winning days to losing days ratio of 4 to 1)
				</p>
				<h2>Proof of Profits <span style={{color:"mediumseagreen"}}>(+$20,995.81)</span></h2>
              <div className="col-md-12">
                <div className="timeline-centered">
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
