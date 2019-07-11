import React, { Component } from 'react';
import ReferralLink from './ReferralLink';

class Referral extends Component {
	render() {
		return (
              <p>
				  <small>
					  <b>If you found this information helpful please consider using my referral link!</b> <br/>
					  <ReferralLink />
				  </small>
			  </p>
		)
	}
}
export default Referral;
