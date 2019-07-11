import React, { Component } from 'react'
import Referral from './Referral'
import ReferralLink from './ReferralLink'
import Header from './Header';
export default class Packages extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="shorts">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12 col-md-offset-3 col-md-pull-3">
				  <Header title="All The Different Packages!"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
				  <div>
					<h3>The FREE Account</h3>
					<p>
						Tradenet always has a free account challenge you can only take once! Essentially you have to make a net profit of $500 on a $14,000 account for 5 trading days. In return, you get a free $500 intro account. I know several traders who have passed the Tradenet challenge 
						and recieved a free account so it may be worth trying out if you want to learn more about the platform. There are a bunch of other rules for the challenge, you can learn more here: 
						<br/>
						<a target="_blank" href="https://www.tradenet.com/trading-challenge/">https://www.tradenet.com/trading-challenge/</a>
					</p>
				  </div>
				  <div>
					<h3>Intro Account</h3>
					<div style={{float:"left", marginRight: "50px", marginBottom: "25px"}}>
						<img style={{width:"210px"}} alt="Intro Account Tradenet" src="images/Packages/TradenetIntroPackage.png" />
					</div>
					<p>
						<ul>
							<li>Cost: $500</li>
							<li>Trading Equity: $14,000</li>
							<li>Max Loss: $700</li>
							<li>Profit Share: 70/30</li>
						</ul>
						The intro account is the cheapest option that Tradenet offers coming in at the low low price of $500. This is a one time payment and you cannot get your money back 
						after purchasing a package. They usually have sales going on where you can purchase the package for much cheaper such as here: <ReferralLink />. 

						The intro account allows you to trade a $14,000 account with a max loss of $700. Given how tight the max loss parameter is, if you're a newbie trader don't be intimidated by trading 
						if you blow up your intro account. I don't know any trader who HASN'T blown up an account. I personally have blown up 2 intro accounts and <a href="/payouts">made $2,275</a> off an intro account (after fees and profit split). That's another thing, you 
						can only purchase this account twice! All packages are also on a profit sharing model where you split the money you make with TEFS. So for the intro account, the profit split
						is 70/30, so if you make $100, you keep $70, and TEFS gets $30.
					</p>
					<br/>
					<Referral />
					<h3>Student Account</h3>
					<div style={{float:"left", marginRight: "50px", marginBottom: "25px"}}>
						<img style={{width:"210px"}} alt="Student Account Tradenet" src="images/Packages/TradenetStudentPackage.png" />
					</div>
					<p>
						<ul>
							<li>Cost: $3,000</li>
							<li>Trading Equity: $80,000</li>
							<li>Max Loss: $4,000</li>
							<li>Profit Share: 75/25</li>
						</ul>
						I recommend the Student Account the most! The max drawdown of $4,000 is more than enough for a beginner/intermediate trader to work with if they
						manage their position sizing accordingly and the payout structure is not bad at all. I made <a href="/payouts">$18,720.81</a> off a student account. You can "upgrade" to this
						account from an intro account by using profits you make in the intro account. Just talk to your account manager!
					</p>
					<br/>
					<Referral />
					<div style={{clear:"both"}}></div>
					<h3>Expert Account</h3>
					<div style={{float:"left", marginRight: "50px", marginBottom: "25px"}}>
						<img style={{width:"210px"}} alt="Expert Account Tradenet" src="images/Packages/TradenetExpertPackage.png" />
					</div>
					<p>
						<ul>
							<li>Cost: $6,000</li>
							<li>Trading Equity: $160,000</li>
							<li>Max Loss: $8,000</li>
							<li>Profit Share: 80/20</li>
						</ul>
					Never bought this package so can't say much about it !
					</p>
					<br/>
					<Referral />
					<div style={{clear:"both"}}></div>
					<h3>Pro Account</h3>
					<div style={{float:"left", marginRight: "50px", marginBottom: "25px"}}>
						<img style={{width:"210px"}} alt="Pro Account Tradenet" src="images/Packages/TradenetProPackage.png" />
					</div>
					<p>
						<ul>
							<li>Cost: $9,000</li>
							<li>Trading Equity: $240,000</li>
							<li>Max Loss: $12,000</li>
							<li>Profit Share: 85/15</li>
						</ul>
					Never bought this package so can't say much about it !
					</p>
					<br/>
					<Referral />
				  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
