import React, { Component } from 'react'
import Referral from './Referral'
export default class Commissions extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="hedging">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                {/*<span className="heading-meta">highlights</span>*/}
                <h2>Commissions</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
			  	  <div style={{float:"left", marginRight: "50px"}}>
				  	put image here
				  </div>
				  <div>
				  	<p>Commissions are .006 per share or $1.50 per trade(buy or sell) , whichever is more. <br/><br/>Example 1: <br/>Buying 300 shares of AAPL will cost $1.80(300*.006) and selling
					those shares will cost another $1.80, so it will cost $3.60 to buy and sell 300 shares of AAPl.</p>
					<p>
						Example 2:<br /> Buying 200 shares of AAPL will cost $1.50 because the minimum cost($1.50) is more than the per share cost(200*.006 = $1.20). So to buy 200 shares of AAPL it 
						will cost you $1.50. Then to sell the shares, it will cost you another $1.50. So in total, it will cost $3.00 to buy and sell 200 shares of AAPL
						
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
