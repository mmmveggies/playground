import React from 'react';
import { Input } from 'react-bootstrap';

export default class InputExt extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return addStyle(this.props);
	}

}

function addStyle(props) {
	switch(props.type) {
		case 'checkbox':
		case 'submit':
		case 'reset':
			return getOffsetInput(props);
		case 'text':
		case 'textarea':
		case 'email':
		default:
			return getLabeledInput(props);
	}
}

function getLabeledInput(props) {
	return <Input {...props} labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
}

function getOffsetInput(props) {
	return <Input {...props} wrapperClassName='col-xs-offset-2 col-xs-2' />
}

function _validateCompleteEmail(v) {
	const emailRegex = (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/i);
	return emailRegex.test(v);
}

function _validateCompleteCsvReceivers(v) {
	const csvReceiversRegex = (/^(\d{10},)*(\d{10})?$/);
	return csvReceiversRegex.test(v);
}
