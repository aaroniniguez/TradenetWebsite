import React, { Component } from 'react'
import Referral from './Referral'
import Hotkey from './Hotkey'
export default class Hotkeys extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="hotkeys">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3">
                <h2>Hotkeys</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
				  	<p>You can set your hotkeys by going to Config->Hot Key</p>
				  	<img src="/images/Hotkeys/HotKeyLocation.png" width="420px"></img>
					<p>
						Listed below are my personal hotkeys, I recommend making your Sell and Short hotkeys completely different than each other on they keyboard! You can easily
						accidently click one instead of the other and selling shares on a current short position will add more shares to your position!
					</p>
					<p>For shorting:</p>
					<Hotkey shortcut="Alt+1" command="CXL ALL;Share=120;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="Alt+2" command="CXL ALL;Share=240;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+3" command="CXL ALL;Share=360;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+4" command="CXL ALL;Share=480;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+5" command="CXL ALL;Share=600;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+6" command="CXL ALL;Share=740;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+7" command="CXL ALL;Share=840;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+8" command="CXL ALL;Share=960;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+9" command="CXL ALL;Share=1080;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+0" command="CXL ALL;Share=1200;Route=CFDR;OrderType=Limit;Price=BID;Short" />
					<Hotkey shortcut="ALT+A" command="CXL ALL" />
					<br/>
					<p>For covering my short:</p>
					<Hotkey shortcut="ALT+Q" command="Share=1/2Pos;Route=CFDR;OrderType=Limit;Price=Ask;Buy" />
					<Hotkey shortcut="ALT+W" command="Share=Pos;Route=CFDR;OrderType=Limit;Price=Ask;Buy" />
					<br/>
					<p>For buying:</p>
					<Hotkey shortcut="Ctrl+1" command="CXL ALL;Share=100;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+2" command="CXL ALL;Share=200;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+3" command="CXL ALL;Share=300;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+4" command="CXL ALL;Share=400;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+5" command="CXL ALL;Share=500;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+6" command="CXL ALL;Share=600;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+7" command="CXL ALL;Share=700;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+8" command="CXL ALL;Share=800;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+9" command="CXL ALL;Share=900;Route=CFDR;OrderType=Market;Buy" />
					<Hotkey shortcut="Ctrl+0" command="CXL ALL;Share=1000;Route=CFDR;OrderType=Market;Buy" />
					<br/>
					<p>For selling my long position:</p>
					<Hotkey shortcut="Ctrl+C" command="Share=1/2Pos;Route=CFDR;OrderType=Market;Sell" />
					<Hotkey shortcut="Ctrl+C" command="Share=Pos;Route=CFDR;OrderType=Market;Sell" />
				  <div>
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
