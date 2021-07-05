import React, { useState } from 'react';
import { LoginInformation } from '../../../interfaces/types';
import * as apiClient from '../../../services/ServerAPIServices';

import './Form.css';

function UserLoginForm(): JSX.Element {
	const loginInformation: LoginInformation = {
		email: '',
		password: '',
	};

	const [input, setInput] = useState(loginInformation);

	function handleChange(event) {
		const { name, value } = event.target;
		setInput({ ...input, [name]: value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		apiClient.login(input);
		// TODO save user state to global state
		// TODO redirect to receipt list
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-container">
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
					<input className="submit-button" type="submit" />
				</div>
			</form>
		</div>
	);
}

export default UserLoginForm;
