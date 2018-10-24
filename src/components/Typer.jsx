import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Typer extends React.Component {
	state = {
		onScreen: [],
		toBeDisplayed: this.props.text
	}

	constructor(props) {
		super(props);
		this.blinker = React.createRef();
	}

	componentDidMount() {
		const { current: blinker } = this.blinker;
		// Run typer and blinker
		setInterval(() => {
			if (blinker.style.visibility === "hidden") blinker.style.visibility = "";
			else blinker.style.visibility = "hidden";
		}, this.props.cursorBlinkSpeed);
		const blinkTime = setInterval(() => {
			const onScreen = this.state.onScreen;
			let splitString = this.state.toBeDisplayed.split('');
			onScreen.push(splitString.shift());
			this.setState({
				onScreen: onScreen,
				toBeDisplayed: splitString.join('')
			});
			// Stop typing when the full text has been displayed
			if (this.state.toBeDisplayed.length === 0) clearInterval(blinkTime);
		}, this.props.typeSpeed);
	}

	render() {
		return (
			<Fragment>
				<span className={ this.props.textClass }>{ this.state.onScreen.join('') }</span>
				<span ref={ this.blinker } style={{ visibility: "hidden" }} className={ this.props.cursorClass }>|</span>
			</Fragment>
		);
	}
}

Typer.defaultProps = {
	text: "This is a blinker component",
	cursorBlinkSpeed: 500,
	typeSpeed: 250,
};

Typer.propTypes = {
	text: PropTypes.string.isRequired,
	textClass: PropTypes.string,
	cursorClass: PropTypes.string,
	cursorBlinkSpeed: PropTypes.number,
	typeSpeed: PropTypes.number
};