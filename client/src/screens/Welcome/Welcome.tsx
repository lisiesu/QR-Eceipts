import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/user-context';
import './Welcome.css';
import MainContainer from '../../components/Main/MainContainer';
import LogOrSign from '../../components/User/LogOrSign/LogOrSign';

function Welcome(): JSX.Element {
	const { setUser } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		(async () => {
			if (localStorage.getItem('logged') === 'true') {
				let user = JSON.parse(localStorage.getItem('user'));
				user = { ...user, logged: true };
				await setUser(user);
				history.push('/receipt-list');
			}
		})();
	}, [history, setUser]);

	return (
		<MainContainer
			CSSoverrideOuter="outer-container"
			CSSoverrideInner="inner-container"
		>
			<LogOrSign />
		</MainContainer>
	);
}

export default Welcome;
