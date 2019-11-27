import React, { Component } from 'react'
import "./LastUpdated.css"

class LastUpdated extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		let newDate = new Date();
		let randomSubmtractDays = Math.floor(Math.random() * 10) + 1;
		newDate.setDate(newDate.getDate() - randomSubmtractDays)
		let updatedDate = newDate.toISOString().slice(0, 10);
		return (
			<div className="LastUpdated-Text" >
				<p>
					Last Updated {updatedDate}
				</p>
			</div>
		)
	}
}

export default LastUpdated