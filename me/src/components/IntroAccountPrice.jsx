import React, { Component } from 'react';
import GenericReferralLink from './GenericReferralLink';
class IntroAccountPrice extends Component {
	render() {
		return (
			<span>
				(You can actually get it for $399 <GenericReferralLink linkText="here"/>)
			</span>
		)
	}
}
export default IntroAccountPrice;
