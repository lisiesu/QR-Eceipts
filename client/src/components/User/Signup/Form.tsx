import React, { useState } from 'react';
import { User } from '../../../interfaces/types';
import * as apiClient from '../../../services/ServerAPIServices';

import './Form.css';

function UserSignupForm(): JSX.Element {
	const user: User = {
		name: '',
		email: '',
		password: '',
		dateOfBirth: '',
		address: '',
	};

	const [input, setInput] = useState(user);

	function handleChange(event) {
		const { name, value } = event.target;
		setInput({ ...input, [name]: value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const createdUser = await apiClient.createUser(input);
		// TODO save user state to global state
		// TODO redirect to receipt list
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-container">
					<label htmlFor="name">
						Name
						<br />
						<input
							id="name"
							name="name"
							type="text"
							title="Full name"
							required
							value={input.name}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="email">
						Email
						<br />
						<input
							id="email"
							name="email"
							type="email"
							required
							value={input.email}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="password">
						Password
						<br />
						<input
							id="password"
							name="password"
							type="password"
							required
							value={input.password}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="date-of-birth">
						Date of Birth
						<br />
						<input
							id="date-of-birth"
							name="dateOfBirth"
							type="date"
							required
							value={input.dateOfBirth}
							onChange={handleChange}
						/>
					</label>
					<label htmlFor="address">
						Address
						<br />
						<input
							id="address"
							name="address"
							type="text"
							required
							value={input.address}
							onChange={handleChange}
						/>
					</label>
					<input className="submit-button" type="submit" />
				</div>
			</form>
		</div>
	);
}

export default UserSignupForm;
