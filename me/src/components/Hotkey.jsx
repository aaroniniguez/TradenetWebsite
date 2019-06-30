import React, { Component } from 'react';

class Hotkey extends Component {
	render() {
		var hotKeyStyle = {
			marginRight: "50px",
			float:"left"
		};
		return (
			<div>
				<div style={hotKeyStyle}>{this.props.shortcut}</div>
				<div>{this.props.command}</div>
			</div>
		)
	}
}
export default Hotkey;
