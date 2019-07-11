import React, { Component } from 'react'
import Referral from './Referral'
export default class Mobile extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="mobile">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <h2>Mobile App for Tradenet</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
			  	<p>
					While there is no iPhone app currently available, there is a google android app <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tefs.mobile&hl=en_US">Download here!</a>
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
