import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginInformation } from '../../../interfaces/types';
import * as apiClient from '../../../services/ServerAPIServices';
import { UserContext } from '../../../contexts/user-context';

import './Form.css';

function UserLoginForm(): JSX.Element {
	const history = useHistory();
	const { setUser } = useContext(UserContext);

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
		try {
			event.preventDefault();
			const user = await apiClient.login(input);
			await setUser({ ...user, logged: true });
			history.push('/receipt-list');
		} catch (err) {
			console.error(err);
		}
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
