import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../../../interfaces/types';
import * as apiClient from '../../../services/ServerAPIServices';
import { UserContext } from '../../../contexts/user-context';
import { ReceiptsContext } from '../../../contexts/receipts-context';
import './Form.css';

function UserSignupForm(): JSX.Element {
	const history = useHistory();
	const { setUser } = useContext(UserContext);
	const { receipt } = useContext(ReceiptsContext);

	const inputState: User = {
		name: '',
		email: '',
		password: '',
		dateOfBirth: '',
		address: '',
	};

	const [input, setInput] = useState(inputState);

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
			const createdUser = await apiClient.createUser(input);
			await setUser({ ...createdUser, ...input, logged: true }); // TODO: Once that the server start returning the object created, remove "...input"
			localStorage.setItem('logged', 'true');
			localStorage.setItem(
				'user',
				JSON.stringify({ ...createdUser, ...input, logged: true })
			);
			if (receipt) {
				apiClient.getReceiptByid(receipt.id);
			}
			setTimeout(() => {
				history.push('/receipt-list');
			}, 3000);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<form onSubmit={handleSubmit} className="signUp">
			<div className="form-container signup">
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
				<div className="button-wrapper">
					<button className="button" type="submit">
						Sign up
					</button>
					<span className="finePrint">
						Already a user?{' '}
						<a href="#" onClick={() => history.push('/login')}>
							Log-in!
						</a>{' '}
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

export default UserSignupForm;
