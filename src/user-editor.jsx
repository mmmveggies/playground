import React from 'react';
import { Panel, Nav, NavItem, Well } from 'react-bootstrap';
import AdminHeader from './admin-header.jsx';
import UserCreateForm from './user-create-form.jsx';
import UserEditForm from './user-edit-form.jsx';

var items = {
	'Add User': <UserCreateForm />,
	'Edit Users': <UserEditForm />, 
	'Delete Users': "adsf",
	'Add Group': "adsf",
	'Edit Groups': "adsf",
	'Delete Groups': "adsf"
}

export default class UserEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = { activeForm: 'Edit Users' }
	}

	handleSelect(eventKey, href) {
		this.setState({ activeForm: eventKey });
		console.log(this);
	}

	render() {
		return (
			<div className='editor'>
				<div className='editor-menu'>
					<Panel header='Menu'>
						<Nav bsStyle='pills' stacked activeKey={this.state.activeForm} onSelect={this.handleSelect.bind(this)}>
							<NavItem eventKey='Add User'>Add New User</NavItem>
							<NavItem eventKey='Edit Users'>Edit Users</NavItem>
							<NavItem eventKey='Delete Users'>Delete Users</NavItem>
							<hr />	
							<NavItem eventKey='Add Group'>Add New Group</NavItem>
							<NavItem eventKey='Edit Groups'>Edit Groups</NavItem>
							<NavItem eventKey='Delete Groups'>Delete Groups</NavItem>
						</Nav>
					</Panel>
				</div>
				<div className='editor-form'>
					<Well>
						{items[this.state.activeForm]}
					</Well>
				</div>
			</div>
		);
	}	
}
