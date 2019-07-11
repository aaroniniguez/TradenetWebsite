import React, { Component } from 'react'
import Referral from './Referral'
import Header from './Header';
export default class Layout extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="layout">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
				<Header title="Setting Your Layout!" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
			  	<p>
					This is what my layout looks like, notice there are no charts. I don't recommend the charts on TEFS, I chart everything on ThinkOrSwim and highly recommend the platform for charting. A lot of professional traders use it and it
					has many cool features such as Thinkorswim On Demand which allows you to easily backtest your strategies. But best of all, it's FREE! You can learn more here: <a target='_blank' href='https://www.thinkorswim.com'>https://www.thinkorswim.com</a><br/> 
					<img style={{width:"840px"}} src="/images/Layout/TradenetLayout.png" alt="Tradenet (TEFS) Platform Layout" />
				</p>
				<p>
					You can download the layout above, here: <br/><a href="/TEFS/Default.scr" download>Download Now</a>
					<br />	
				</p>
				<div style={{float:"left"}}>
					<img style={{width:"210px", marginRight:"50px"}} src="images/Layout/TradenetSetDefaultScreen.png" alt="Tradenet Default Screen" />
				</div>
				<div>
					<p>
						You can set this as your default screen on opening the TEFS application by saving it as the default screen and clicking "Open Default Screen" on login: 
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
