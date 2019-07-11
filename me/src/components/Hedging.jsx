 import React, { Component } from 'react'
import Referral from './Referral'
import Header from './Header'
export default class Hedging extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="commissions">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                {/*<span className="heading-meta">highlights</span>*/}
				<Header title="Hedging!"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
			  	  <div style={{float:"left", marginRight: "50px"}}>
				  </div>
				  <div>
				  	<p>
						In November 2018, I became hedged...I'm still not entirely sure what is is but essentially I think it's just a different way to manage risk 
						on the provider side(so if TEFS deems your trading style risky then they will put extra limits on your trading). My style of trading has me take 50-100 trades a day, so pretty 
						high frequency trading for a retail trader. When I became hedged I was unable to trade stocks that I could normally trade. Here is a little bit more information regarding what hedging is (straight from 
						the TEFS provider service agreement). You can read the entire document here: <a target="_blank" href="https://tefsec.com/trader-service-agreement/">https://tefsec.com/trader-service-agreement/</a>
						<br />
						<img style={{width:"630px"}} alt="Tradenet Hedged Account" src="/images/Hedging/TradenetHedging.png"></img>
					</p>
					<p>
				  	<h2>WAIT, am I hedged?</h2>
					Probably not, most accounts are not hedged. To check whether or not you are hedged , you can check the Broker column in the Trade Manager, if there are any values then you have a hedged account.<br/>
					<img style={{width:"420px"}} alt="Tradnet Broker Column Values mean you are hedged" src="/images/Hedging/TradenetHedgedAccountBrokerColumn.png"></img>
					</p>
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
