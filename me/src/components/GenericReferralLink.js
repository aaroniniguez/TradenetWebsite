import React, { Component } from 'react';

class GenericReferralLink extends Component {
	handleClick(e) {
		e.preventDefault();
		console.log("send back to aaron")
	}
	render() {
		return (
			   <a onClick={this.handleClick} target="_blank" href="hhttp://jump2click.com/visit/?bta=37140&nci=6639">{this.props.linkText}</a>
		)
	}
}
export default GenericReferralLink;
