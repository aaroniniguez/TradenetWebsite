import React, { Component } from 'react';
import GenericReferralLink from './GenericReferralLink';
class StudentAccountPrice extends Component {
	render() {
		return (
			<span>
				(Discounted to $2,500 <GenericReferralLink linkText="here"/>)
			</span>
		)
	}
}
export default StudentAccountPrice;