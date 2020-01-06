import React, { Component } from 'react'
import Referral from './Referral'
import Header from './Header'
export default class Overnight extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="Overnight-Positions">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                {/*<span className="heading-meta">highlights</span>*/}
				<Header title="Swing trading and overnight fees!"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
			  	  <div style={{float:"left", marginRight: "50px"}}>
				  </div>
				  <div>
				  	<p>
						  Tradenet is suprisingly really good for swing traders as they do not charge any overnight holding fees at all 
						  for up to 20% of your account. For example, if you have an intro account you can swing 20%
						  of $14,000, so $2,800. Anything more than 20%, tradenet will automatically
						  close the excess position amount at the end of the day.
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
