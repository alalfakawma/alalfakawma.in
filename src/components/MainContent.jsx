import React from 'react';
import Typer from './Typer.jsx';

export default class MainContent extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="content-holder is-size-5">
					<span>&raquo; Hello, I am</span>
					<div>
						&raquo; <Typer text="Aseem Lalfakawma." textClass="has-text-weight-bold" />
					</div>
					<span>&raquo; I am a <span className="has-text-weight-bold">web developer</span> from Mizoram, India.</span>
					<div>&raquo; <Typer typeSpeed={150} text="I make modern web apps using Vue, React and Laravel." /></div>
					<div>
						&raquo; <a href="https://freelancer.in/u/alalfakawma" target="_blank" rel="noopener noreferrer">
							hire me
						</a>
						&nbsp;|&nbsp;
						<a href="https://github.com/alalfakawma" target="_blank" rel="noopener noreferrer">
							github
						</a>
						&nbsp;|&nbsp;
						<a href="https://gitlab.com/alalfakawma" target="_blank" rel="noopener noreferrer">
							gitlab
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
