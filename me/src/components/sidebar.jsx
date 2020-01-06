import React, { Component } from 'react'
import ReferralLink from './ReferralLink';

export default class Sidebar extends Component {

  render() {
    this.state = {
		currentPage: window.location.pathname
	};
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/Sidebar/TradenetAbout.jpg)'}} />
              <h1 id="colorlib-logo"><a href="/about"><img style={{width:"100%"}} src="images/Sidebar/WebsiteLogo.png"></img></a></h1>
              <span className="email"><i className="icon-mail"></i> <img alt="dont spam my email please" src="images/Sidebar/TradenetEmailAddress.png" style={{width:"80%"}}></img></span>
			  <br/>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div className="collapse">
                <ul>
                  <li><a className={this.state.currentPage =="/about" ? "aPsuedoHover": ""} href="/about" data-nav-section="home">My Experience With Tradenet</a></li>
                  <li><a className={this.state.currentPage =="/payouts" ? "aPsuedoHover" : ""} href="/payouts" data-nav-section="payout">Payouts</a></li>
                  <li><a className={this.state.currentPage == "/layout" ? "aPsuedoHover" : ""} href="/layout" data-nav-section="layout">Layout</a></li>
                  <li><a className={this.state.currentPage == "/hotkeys" ? "aPsuedoHover": ""} href="/hotkeys" data-nav-section="hotkeys">Hotkeys</a></li>
                  <li><a className={this.state.currentPage == "/shorts" ? "aPsuedoHover" : ""} href="/shorts" data-nav-section="shorts">Shorting</a></li>
                  <li><a className={this.state.currentPage == "/commissions" ? "aPsuedoHover" : ""} href="/commissions" data-nav-section="commissions">Commissions</a></li>
                  <li><a className={this.state.currentPage == "/hedging" ? "aPsuedoHover" : ""} href="/hedging" data-nav-section="hedging">Hedging</a></li>
                  <li><a className={this.state.currentPage == "/overnight" ? "aPsuedoHover" : ""} href="/overnight" data-nav-section="hedging">Overnight Positions</a></li>
                  <li><a className={this.state.currentPage == "/thinkorswim" ? "aPsuedoHover" : ""} href="/thinkorswim" data-nav-section="tos">Thinkorswim Studies</a></li>
                  <li><a className={this.state.currentPage == "/mobile" ? "aPsuedoHover" : ""} href="/mobile" data-nav-section="mobile">Mobile App</a></li>
                  <li><a class="nav-link" target="_blank" href="http://www.youtube.com/channel/UCGLVXMdyWJagv_5U3VqlmJQ">Videos</a></li>
                  <li><a className={this.state.currentPage == "/books" ? "aPsuedoHover" : ""} href="/books" data-nav-section="books">Recommended Books</a></li>
                  <li><a className={this.state.currentPage == "/packages" ? "aPsuedoHover" : ""} href="/packages" data-nav-section="packages">Packages</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://twitter.com/jhonboger" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
             </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
				  <small>
					  Made with <i className="icon-heart" aria-hidden="true" /> and lots of  <i className="icon-coffee" aria-hidden="true"></i><br/>
					  If you found this resource helpful please consider using my referral link for 20% off the accounts! <br></br>(Full Disclosure I get 10% commission, please help fund my degenerate trading habit)<br/>
					  <ReferralLink />
				  </small>
			  </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
