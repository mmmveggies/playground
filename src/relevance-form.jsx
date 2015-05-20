import React from 'react';
import { Input } from 'react-bootstrap';
import InputExt from './input-ext.jsx';

const emailInput = {
	type: 'email',
	label: 'Email',
	placeholder: 'first.last@echostar.com',
	bsStyle: 'warning',
	hasFeedback: true
}

const receiverInput = {
	type: 'textarea',
	label: 'Receiver IDs',
	placeholder: 'Comma separated, e.g. "1884253467,1820396387"',
	bsStyle: 'error',
	hasFeedback: true
}

const isAdminInput = {
	type: 'checkbox',
	label: 'Make Admin'
}

const submitInput = {
	type: 'submit',
	value: 'Create User'
}

export default class UserCreateForm extends React.Component {
	render() {
		return (
			<form className='form-horizontal'>
				<InputExt {...emailInput} />
				<InputExt {...receiverInput} />
				<InputExt {...isAdminInput} />
				<InputExt {...submitInput} />
			</form>
		);
	}
}

