import React from 'react';

class DigitalClicker extends React.Component {
	constructor(){
		super();

		this.state = {
			timesClicked: 0,
		};

		this.handleClick = this.handleClick.bind(this);
  }

	handleClick(){
		this.setState({
  		timesClicked: this.state.timesClicked + 4,
		});
	}
	
	render(){
		return(
			<button onClick={this.handleClick}>{this.state.timesClicked}</button>
		);
	}
}

export default DigitalClicker;