import React, { Component } from 'react';
import GenericReferralLink from './GenericReferralLink';
class IntroAccountPrice extends Component {
	render() {
		return (
			<span>
				(Discounted to $399 <GenericReferralLink linkText="here"/>)
			</span>
		)
	}
}
export default IntroAccountPrice;
