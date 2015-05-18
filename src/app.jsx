import React from 'react';
import AdminHeader from './admin-header.jsx';
import UserEditor from './user-editor.jsx';

export default class App extends React.Component {
    render() {
        return (
			<div>
				<AdminHeader username="test@echostar.com"/>
				<UserEditor />
			</div>
		);
    }
}
