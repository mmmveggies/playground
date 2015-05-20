import React from 'react';
import InputExt from './input-ext.jsx';

const emailInput = {
	type: 'email',
	label: 'Email',
	placeholder: 'first.last@echostar.com',
	hasFeedback: true
}

const receiverInput = {
	type: 'textarea',
	label: 'Receiver IDs',
	placeholder: 'Comma separated, e.g. 1884253467,1820396387',
	hasFeedback: true
}

const isAdminInput = {
	type: 'checkbox',
	label: 'Is Admin'
}

const submitInput = {
	type: 'submit',
	value: 'Create User'
}

export default class UserCreateForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			allUsers: [],	
			username: null, 
			isAdmin: null, 
			receivers: [] 
		};
	}

	getAllUsers() {
		var req = new XMLHttpRequest();
		req.open('GET', '/api/Users', true);
		req.onload = () => {
			if(req.status >= 200 && req.status < 400) {
				this.setState({ allUsers: JSON.parse(req.responseText) });
			}
		}
		req.send();
	}

	render() {
		return (
			<form className='form-horizontal'>
				<InputExt {...emailInput} />
				<InputExt {...receiverInput} >adsfasf</InputExt>
				<InputExt {...isAdminInput} />
				<InputExt {...submitInput} />
			</form>
		);
	}
}

