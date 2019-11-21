import React, { Component } from 'react'
import Referral from './Referral'
import Header from './Header';
export default class ThinkOrSwim extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="tos">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
				  <Header title="ThinkOrSwim Studies!"/>
              </div>
            </div>
            <div className="row">
            </div>
          </div>
        </section>
      </div>
    )
  }
}
