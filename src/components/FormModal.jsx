import React from 'react';

export default class FormModal extends React.Component {
	state = {
		modalOpen: false
	}

	constructor(props) {
		super(props);
		this.modal = React.createRef();
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		if (this.state.modalOpen) this.setState({modalOpen: false})
		else this.setState({modalOpen: true})
	}

	render() {
		return (
			<div ref={ this.modal } className={ !this.state.modalOpen ? "modal" : "modal is-active" }>
				<div onClick={ this.toggleModal } className="modal-background"></div>
				<div className="modal-content">
					<form method="POST" name="message-me" className="box" style={{ background: "#FFFDD0" }} netlify>
						<div className="field">
						  <label className="label">Name</label>
						  <div className="control">
						    <input className="input" type="text" name="name" />
						  </div>
						</div>

						<div className="field">
						  <label className="label">Email</label>
						  <div className="control">
						    <input className="input" type="email" name="email" />
						  </div>
						</div>

						<div class="field">
						  <label class="label">Message</label>
						  <div class="control">
						    <textarea class="textarea" name="message"></textarea>
						  </div>
						</div>

						<div className="field has-text-centered">
							<button type="submit" className="button send-message-button">Send Message</button>
						</div>
					</form>
				</div>
				<button onClick={ this.toggleModal } className="modal-close is-large" aria-label="close"></button>
			</div>
		);
	}
}