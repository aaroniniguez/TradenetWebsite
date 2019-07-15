import React, { Component } from 'react';

class GenericReferralLink extends Component {
	render() {
		return (
			   <a target="_blank" href="http://jump2click.com/visit/?bta=37140&nci=6639">{this.props.linkText}</a>
		)
	}
}
export default GenericReferralLink;
