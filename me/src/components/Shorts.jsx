import React, { Component } from 'react'
import Referral from './Referral'
import Header from './Header';
export default class Shorts extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="shorts">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
				  <Header title="Shorting!"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
				  <div>
				  	Prior to around October 2018 shorting small cap stocks was <b>very</b> good on Tradenet and could honestly be said to be better than at other brokers for small cap shorts(and without the short locate fees/short overnight fees!). 
					Now however, small caps are generally not shortable on the platform. However the ability to short new ipo's(such as Uber in 2019) is still a viable advantage Tradenet has over traditional brokers. Furthermore, large/mid cap stocks are generally shortable on the platform.
					
					<br/><br/><br/>
					
					<h1>Determining whether or not a ticker is shortable: </h1>
					<h3>Normal Tradenet Accounts:</h3>
					<div style={{float:"left", marginRight: "50px", marginBottom: "25px"}}>
						<img style={{width:"420px"}} alt="shorting stocks with a normal tradenet account" src="images/Shorts/TradenetShortableNormalAccount.png" />
					</div>
					<p>
						To see if a stock is shortable, go to the Trade Manager, if there is a "Y" in the "Is Tradeable" column then the stock is shortable. In this example you are able to short GOOG and BYND.
					</p>
					<div style={{clear:"both"}}></div>
					<h3>Hedged Tradenet Accounts:</h3>
					<div style={{float:"left", marginRight: "50px", marginBottom: "25px"}}>
						<img style={{width:"420px"}} alt="shorting stocks with a Hedged Tradenet Account" src="images/Shorts/TradenetShortableHedgedAccount.png" />
					</div>
					<p>
						If you are hedged (to learn more about hedging <a href="/hedging">click here</a>), then you can only short stocks that have a value GREATER than 0 in the ShortSize column. In this example you are able to short GOOG but not BYND.
					</p>
					<br/>
					<Referral />
				  </div>
              </div>
			  <div>
			  	<h3>REALLY determining whether a stock is shortable</h3>
			  	<p>
					Sometimes Tradenet will auto update a stocks shortablility and the information in the Trade Manager box will be unreliable or a little bit slow to update, the surefire way to check if a stock is shortable is to try and actually 
					short it! I recommend testing it out with 1 share of course haha.
 				</p>
					<br/>
					<Referral />
			  </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
