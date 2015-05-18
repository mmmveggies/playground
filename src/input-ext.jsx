import React from 'react';
import { Input } from 'react-bootstrap';

// http://www.regular-expressions.info/email.html
const emailRegex = (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum)\b/i);

const csvReceiversRegex = (/^(\d{10},)*(\d{10})?$/);

export default class InputExt extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			valid: null // null or "success", "warning", "error" for style
		}
	}

}

function _validateCompleteEmail(v) {
	return emailRegex.test(v);
}

function _validateCompleteCsvReceivers(v) {
	return csvReceiversRegex.test(v);
}
