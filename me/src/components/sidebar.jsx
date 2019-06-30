import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Shorts from './Shorts';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="/">Archetype123</a></h1>
              <span className="email"><i className="icon-mail"></i> misterpennystocks@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div className="collapse">
                <ul>
                  <li><a href="/about" data-nav-section="home">My Experience With Tradenet</a></li>
                  <li><a href="/payouts" data-nav-section="payout">Payouts</a></li>
                  <li><a href="/layout" data-nav-section="layout">Layout</a></li>
                  <li><a href="/hotkeys" data-nav-section="hotkeys">Hotkeys</a></li>
                  <li><a href="/shorts" data-nav-section="shorts">Shorting</a></li>
                  <li><a href="/commissions" data-nav-section="commissions">Commissions</a></li>
                  <li><a href="/hedging" data-nav-section="hedging">Hedging</a></li>
                  <li><a class="nav-link" target="_blank" href="http://www.youtube.com/channel/UCGLVXMdyWJagv_5U3VqlmJQ">Videos</a></li>
                  <li><a href="/books" data-nav-section="books">Recommended Books</a></li>
                  <li><a href="/packages" data-nav-section="packages">Packages</a></li>
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
					  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br/>
					  If you found this resource helpful please consider using my referral link! <br></br>(Full Disclosure I get 10%)<br/>
					  <a target="_blank" href="http://jump2click.com/visit/?bta=37140&nci=6639">http://jump2click.com/visit/?bta=37140&nci=6639</a>
				  </small>
			  </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
