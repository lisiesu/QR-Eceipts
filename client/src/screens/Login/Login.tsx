import React from 'react';
import './Login.css';
import MainContainer from '../../components/Main/MainContainer';
import UserLoginForm from '../../components/User/Login/Form';

function Login(): JSX.Element {
	return (
		<MainContainer
			CSSoverrideOuter="outer-container"
			CSSoverrideInner="inner-container"
		>
			<UserLoginForm />
		</MainContainer>
	);
}

export default Login;
