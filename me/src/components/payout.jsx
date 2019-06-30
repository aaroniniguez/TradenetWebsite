import React, { Component } from 'react';

class Payout extends Component {
	render() {
		var imageStyles = {
			maxWidth: "100%"
		};
		return (
			<article className="timeline-entry">
			<div className="timeline-entry-inner">
			  <div className="timeline-icon color-3">
				<i className="icon-paypal" />
			  </div>
			  <div className="timeline-label">
				<h2>{this.props.month}<span> {this.props.year}</span></h2>
				<img style={imageStyles} alt={this.props.month + " Payout"} src={"images/Payouts/" + this.props.month + "Payout.png"}></img>
			  </div>
			</div>
			</article>
		)
	}
}
export default Payout;
