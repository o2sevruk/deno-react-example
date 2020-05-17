import React from 'https://dev.jspm.io/react';

import ListUsers from './ListUsers.jsx';

const users = [
	{
		"id": "user1",
		"name": "User 1"
	},
	{
		"id": "user2",
		"name": "User 2"
	},
	{
		"id": "user3",
		"name": "User 3"
	}
];

class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Users list:</h2>
				<ListUsers users={users} />
			</div>
		);
	}
}

export default App;