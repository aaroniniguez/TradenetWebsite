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
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Router>
						<Route path='/shorts' component={Shorts}/>
						<Route path='/about' component={Introduction}/>
						<Route path='/payouts' component={Timeline}/>
						<Route path='/Layout' component={Layout}/>
						<Route path='/Hotkeys' component={Hotkeys}/>
						<Route path='/commissions' component={Commissions}/>
						<Route path='/books' component={Books}/>
					</Router>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
