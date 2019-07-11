import React, { Component } from 'react'
import Referral from './Referral'
import Header from './Header'
export default class Commissions extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="commissions">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
				<Header title="Commissions!" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
			  	  <div style={{float:"left", marginRight: "50px"}}>
					  <img alt="Tradenet Commissions" src="images/Commissions/TradenetCommissions.png" style={{width:"420px"}}/>
				  </div>
				  <div>
				  	<p>Commissions are .006 per share or $1.50 per trade(buy or sell) , whichever is more. <br/><br/>Example 1: <br/>Buying 300 shares of AAPL will cost $1.80(300*.006) and selling
					those shares will cost another $1.80, so it will cost $3.60 to buy and sell 300 shares of AAPl.</p>
					<p>
						Example 2:<br /> Buying 200 shares of AAPL will cost $1.50 because the minimum cost($1.50) is more than the per share cost(200*.006 = $1.20). So to buy 200 shares of AAPL it 
						will cost you $1.50. Then to sell the shares, it will cost you another $1.50. So in total, it will cost $3.00 to buy and sell 200 shares of AAPL
						
					</p>
					
					<p>For fun let's take a look at the commissions of some other notable brokers that allow day trading for traders UNDER PDT to see how they stack up: </p>
					<div>
						SureTrader: <img alt="Suretrader commissions" style={{width:"420px"}} src="images/Commissions/SureTraderCommissions.png"></img><br/>
						CMEG: <img alt="CMED commissions" style={{width:"630px"}} src="images/Commissions/CmegCommissions.png"></img>
						<p>
							As you can see , SureTraders commission's (they actually have a $4.95 minimum as well along with the $.01 per share) suck, almost twice as expensive as Tradenet's, and CMEG's are pretty on par with Tradenet's when you get to the 
							Monthly Volume of > 350,000 , but I would argue that if you are trading that size, then you are probably trading with a US based brokerage or a prop firm anyway. 
						</p>
					</div>
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
