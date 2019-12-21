import React, { Component } from 'react';

class GenericReferralLink extends Component {
	constructor(props) {
		super(props)
		this.sendEmail = this.sendEmail.bind(this);
	}
	sendEmail() {
		fetch(process.env.REACT_APP_URL + "send").catch((e) => {
			console.log("click email error: " + e);
		});
	}
	render() {
		return (
			   <a onClick={this.sendEmail} target="_blank" href="http://jump2click.com/visit/?bta=37140&nci=6639">{this.props.linkText}</a>
		)
	}
}
export default GenericReferralLink;
