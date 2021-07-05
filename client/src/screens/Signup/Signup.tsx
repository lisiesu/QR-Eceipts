import React from 'react';
import './Signup.css';
import MainContainer from '../../components/Main/MainContainer';
import UserSignupForm from '../../components/User/Signup/Form';

function Signup(): JSX.Element {
	return (
		<MainContainer>
			<UserSignupForm />
		</MainContainer>
	);
}

export default Signup;
