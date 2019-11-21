import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Timeline from './components/timeline'
import Books from './components/books'
import Commissions from './components/commissions'
import Shorts from './components/Shorts'
import Layout from './components/Layout'
import Hotkeys from './components/Hotkeys'
import Mobile from './components/Mobile'
import Hedging from './components/Hedging'
import Packages from './components/Packages'
import Thinkorswim from './components/Thinkorswim'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'
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
						<Route path='/shorts' component={Shorts}/>
						<Route path='/Mobile' component={Mobile}/>
						<Route path='/about' component={Introduction}/>
						<Route path='/payouts' component={Timeline}/>
						<Route path='/Layout' component={Layout}/>
						<Route path='/Hotkeys' component={Hotkeys}/>
						<Route path='/Hedging' component={Hedging}/>
						<Route path='/Thinkorswim' component={Thinkorswim}/>
						<Route path='/commissions' component={Commissions}/>
						<Route path='/books' component={Books}/>
						<Route path='/packages' component={Packages}/>
					</Router>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
