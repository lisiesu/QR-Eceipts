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

	document.addEventListener('DOMContentLoaded', () => {
		const btn = document.querySelector('.button');
		const loader = document.querySelector('.loader');
		const check = document.querySelector('.check');
		btn.addEventListener('click', () => loader.classList.add('active'));
		loader.addEventListener('animationend', () =>
			check.classList.add('active')
		);
	});

	async function handleSubmit(event) {
		try {
			event.preventDefault();
			const user = await apiClient.login(input);
			await setUser({ ...user, logged: true });
			localStorage.setItem('logged', 'true');
			setTimeout(() => {
				history.push('/receipt-list');
			}, 2000);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-container">
				<label className="loginForm" htmlFor="email">
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
				<label className="loginForm" htmlFor="password">
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

				<div className="button-wrapper">
					<button className="button" type="submit">
						Log in
					</button>
					<span className="fineprint">
						New to QR-Eceipts?{' '}
						<a href="#" onClick={() => history.push('/signup')}>
							Sign up!
						</a>
					</span>
					<div className="loader">
						<div className="check">
							<span className="check-one" />
							<span className="check-two" />
						</div>
					</div>
				</div>
			</div>
		</form>
	);
}

export default UserLoginForm;
