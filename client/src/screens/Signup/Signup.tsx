import React from 'react';
import './Signup.css';
import MainContainer from '../../components/Main/MainContainer';
import UserSignupForm from '../../components/User/Signup/Form';

function Signup(): JSX.Element {
	return (
		<MainContainer
			CSSoverrideOuter="outer-container"
			CSSoverrideInner="inner-container"
		>
			<UserSignupForm />
		</MainContainer>
	);
}

export default Signup;
