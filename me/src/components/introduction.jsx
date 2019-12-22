import React, { Component } from 'react'
import Referral from './Referral';
import ReferralLink from './ReferralLink';
import IntroAccountPrice from './IntroAccountPrice';
import StudentAccountPrice from "./StudentAccountPrice";
import LastUpdated from './LastUpdated';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="layout">
          <div className="colorlib-narrow-content">
            <div className="row">
				  <div className="col-md-6">
						<h1>My 1 Year Experience with Tradenet</h1>
						<LastUpdated />
				  </div>
				  <div className="col-md-6">
					  <img alt="Tradenet Logo" src="images/About/TradenetLogo.jpg" style={{width:"75%"}}></img>
				  </div>
				  <div className="col-md-12">
						<br/>
						<h2>Who am I?</h2>
						<p>
							I'm a full time trader based in Los Angeles. If you are in the Santa Monica area feel free to hit me up, I love talking shop and networking with other traders! Just message me via twitter or send me an email at:
							<span className="email">
								<i className="icon-mail"></i>
								<img style={{width: "200px"}} alt="dont spam my email please" src="images/Sidebar/TradenetEmailAddress.png"></img>
							</span>
						</p>
						<p>
							I've been trading on and off since 2012 when the marijuana stocks were booming. I was always struggling under PDT and was net negative around $20k in 
							SureTrader before first becoming aware of Tradenet back in mid 2018. I was, of course, incredibly skeptical. Luckily Tradenet has a cheap account intro account for only $500 <IntroAccountPrice/> to test the waters with. So I paid for the intial intro account because if it did turn out to be a scam the most I would be out would be $500 which isn't bad at all. 
							To my surprise not only was the trading platform good, in terms of execution speed, level 2 quotes, and <a href="/commissions">commissions</a>, but they actually <a href="/payouts">paid out!</a> My first intro account I profited around $3k and submitted a wire out request which subsequently went straight to my bank account. 
							So after that initial payout, I was incredibly happy at my success. Unfortunately in the following days I traded very badly and did not stick to my rules and setups and I ended up blowing my intro account. I then decided to buy the student account to get access to more buying power ($80,000).
							The student account was a bit more pricey than the intro account at a hefty price of $3,000 <StudentAccountPrice/>, but getting that initial $2.2k payout helped decrease my fears a little bit. Long story short, after buying the student account, I had massive success, making over $18.7k off my initial $3k investment! 
						</p>
						<h2>Let's Backtrack, what exactly is Tradenet?</h2>
						<p>Plain and simple , it's a way to get around PDT for US based traders. You don't trade Stocks, you trade CFD's . So the way it works is you buy different packages, for instance you can buy 
						a $500 intro package<IntroAccountPrice/> which gives you access to a $14,000 account with a maximum drawdown of $700. You are literally paying $500, and you can lose $700. For traders starting out with a small amount of capital, this is a pretty sweet deal. Then it goes on to higher level packages, the highest one I 
						ever did was the $3k package which gives you access to $80k with a maximum drawdown of $4k. They have more expensive packages but honestly for the majority of traders out there, 
						the intro and student accounts are all you need unless you are a very advanced trader and need a lot of capital. If you would like to learn more about the different packages, check out my write up <a href="/packages">here</a>
						</p>
						<h2>I've heard bad things about Tradenet, you seriously recommend them?!</h2>
						<p>
							YES! Here's why:
							<ul>
								<li>
									They <a href="/payouts">payout</a>, they <a href="/payouts">payout</a>, they <a href="/payouts">payout</a>
								</li>
								<li>
									Their commissions are cheaper than any other (under PDT) alternative , see <a href="/commissions">commissions</a>
								</li>
								<li>
									If you are a US citizen under PDT, and you want to day trade, you're stuck with SureTrader and CMEG both of which suck
								</li>
								<li>
									You are probably undercapitalized (you have a small account), here's why that matters:
									<ul>
										<li>
											Let's look at small accounts from a psychological perspective. Say you start with an account balance of $3,000 and you take a series of trades that did not turn in your favor, and now your account balance is at $1,700. Your brain goes into idgaf mode and you will say <i>"let me wait and see what will happen if I hold this stock longer than usual. I don't want to realize the loss 
											and have less than $1,700 left in my account, I can't even trade with a $1,700 account! It's too tiny!'"</i> This may seem like a farfetched scenario but this literally happened to me. Instead of taking the loss because the trade was WRONG and I needed to get out, I let the account go to $0. If I had gotten out at the correct time, I would have had an extra $1,700 in my pocket. With a funded account, it doesn't even have to be tradenet, it can be any form of funded account situation, 
											you will continue to have roughly the same amount of buying power regardless of the loss you take.
										</li>	
										<li>
											Essentially with small accounts you're trading with a growth mindset (or at least I was), and striving to break certain psychological levels such as $3,000, $4,000 etc. that MAY affect your trading. Now ask yourself, does the market care about your stupid levels?
										</li>
									</ul>
								</li>
								<li>
									But at the end of the day it's your trading, choose the platform that suites YOUR needs!
								</li>
							</ul>
						</p>
						<h2>Wait, did you just create this website out of the goodness of your heart?</h2>
						<p>Nope! The benefits are threefold for me
						<ul>
							<li>Personal EGO! I was probably the longest term consistent trader on Tradenet and feel like my story should be told!</li>
							<li>Tradenet offers a very generous referral compensation program, so this site is LITTERED with my referral links</li>
							<li>I actually would STILL recommend Tradenet (even if they offered no referral compensation) for US traders under PDT, the options out there just suck! Especially for scalpers!</li>
							<li>I am passionate about programming(Javascript in particular :D) so this is a good way to practice my Javascript. React + Node = <i class='icon-heart'></i> :D</li>
						</ul>
						</p>
				  <Referral />
				  </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
