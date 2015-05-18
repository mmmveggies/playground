import React from 'react';
import { Input } from 'react-bootstrap';

const emailInput = getLabeledInput({
	type: 'email',
	label: 'Email',
	placeholder: 'first.last@echostar.com',
	bsStyle: 'warning',
	hasFeedback: true
});

const receiverInput = getLabeledInput({
	type: 'textarea',
	label: 'Receiver IDs',
	placeholder: 'Comma separated, e.g. "1884253467,1820396387"',
	bsStyle: 'error',
	hasFeedback: true
});

const isAdminInput = getOffsetInput({
	type: 'checkbox',
	label: 'Make Admin'
});

const submitInput = getOffsetInput({
	type: 'submit',
	value: 'Create User'
});

export default class UserCreateForm extends React.Component {
	render() {
		return (
			<form className='form-horizontal'>
				{emailInput}
				{receiverInput}
				{isAdminInput}
				{submitInput}
			</form>
		);
	}
}

function getLabeledInput(props) {
	props.labelClassName = 'col-xs-2';
	props.wrapperClassName = 'col-xs-10';
	return <Input {...props} />
}

function getOffsetInput(props) {
	props.wrapperClassName = 'col-xs-offset-2 col-xs-10';
	return <Input {...props} />
}
