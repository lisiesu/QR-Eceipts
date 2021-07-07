import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context';
import './Welcome.css';
import MainContainer from '../../components/Main/MainContainer';
import LogOrSign from '../../components/User/LogOrSign/LogOrSign';

function Welcome(): JSX.Element {
	const { user } = useContext(UserContext);
	return (
		<MainContainer
			CSSoverrideOuter="outer-container"
			CSSoverrideInner="inner-container"
		>
			{localStorage.getItem('logged') === 'true' ? (
				<Redirect to="/receipt-list" />
			) : (
				<LogOrSign />
			)}
		</MainContainer>
	);
}

export default Welcome;
