import React from 'react';
import { DropdownButton, MenuItem, PageHeader } from 'react-bootstrap';

export default class AdminHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<PageHeader>
					Administration&nbsp;
					<DropdownButton className='pull-right' title={this.props.username || 'My Account'}>
						<MenuItem><a href='/account'>Account Settings</a></MenuItem>
						<MenuItem divider />
						<MenuItem><a href='/logout'>Logout</a></MenuItem>
					</DropdownButton>
				</PageHeader>
			</header>
		);
	}
}
