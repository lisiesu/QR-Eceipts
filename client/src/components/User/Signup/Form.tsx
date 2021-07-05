import React, { useState } from 'react';
import './Form.css';

function UserSignupForm(): JSX.Element {
	const [input, setInput] = useState({
		name: '',
		email: '',
		password: '',
		dateOfBirth: '',
		address: '',
	});

	function handleChange(event) {
		console.log(event);
		const { name, value } = event.target;
		setInput({ ...input, [name]: value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(input);
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
