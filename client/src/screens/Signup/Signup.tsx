import React from 'react';
import './Signup.css';
import UserSignupForm from '../../components/User/Signup/Form';

function Login(): JSX.Element {
	return (
		<main className="formscreen-body">
			<div className="formscreen-container">
				<UserSignupForm />
			</div>
		</main>
	);
}

export default Login;
