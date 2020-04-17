import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Payouts from './components/Payouts'
import Books from './components/books'
import Commissions from './components/commissions'
import Shorts from './components/Shorts'
import Layout from './components/Layout'
import Hotkeys from './components/Hotkeys'
import Mobile from './components/Mobile'
import Hedging from './components/Hedging'
import OvernightShorts from './components/Overnight'
import Packages from './components/Packages'
import Thinkorswim from './components/Thinkorswim'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'
import Page from "./components/Page" 
ReactGA.initialize('UA-143698861-1');
const history = createHistory();
ReactGA.pageview(window.location.pathname);
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Router>
						<Route
							path='/shorts'
							render={props => (
								<Page {...props} component={Shorts} title="Shorting on Tradenet" />
							)}
						/>
						<Route
							path='/Mobile'
							render={props => (
								<Page {...props} component={Mobile} title="Mobile Trading With Tradenet" />
							)}
						/>
						<Route
							path='/about'
							render={props => (
								<Page {...props} component={Introduction} title="My Experience With Tradenet" />
							)}
						/>
						<Route
							path='/payouts'
							render={props => (
								<Page {...props} component={Payouts} title="How To Get a Payout From Tradenet" />
							)}
						/>
						<Route
							path='/Layout'
							render={props => (
								<Page {...props} component={Layout} title="Tradenet Trading Layout" />
							)}
						/>
						<Route
							path='/Hotkeys'
							render={props => (
								<Page {...props} component={Hotkeys} title="Tradenet Hotkeys" />
							)}
						/>
						<Route
							path='/Hedging'
							render={props => (
								<Page {...props} component={Hedging} title="Hedging on Tradenet" />
							)}
						/>
						<Route
							path='/Overnight'
							render={props => (
								<Page {...props} component={OvernightShorts} title="Holding Overnight on Tradenet" />
							)}
						/>
						<Route
							path='/Thinkorswim'
							render={props => (
								<Page {...props} component={Thinkorswim} title="Thinkorswim Studies" />
							)}
						/>
						<Route
							path='/commissions'
							render={props => (
								<Page {...props} component={Commissions} title="Commissions on Tradenet" />
							)}
						/>
						<Route
							path='/books'
							render={props => (
								<Page {...props} component={Books} title="The Top Trading Books I Recommend" />
							)}
						/>
						<Route
							path='/packages'
							render={props => (
								<Page {...props} component={Packages} title="Tradnet Packages" />
							)}
						/>
					</Router>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
