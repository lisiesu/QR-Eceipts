import React, { useEffect, useContext } from 'react';
import './Logout.css';
import { useHistory } from 'react-router-dom';
import MainContainer from '../../components/Main/MainContainer';
import { logout } from '../../services/ServerAPIServices';
import { UserContext } from '../../contexts/user-context';
import { ReceiptsContext } from '../../contexts/receipts-context';

function Logout(): JSX.Element {
	const history = useHistory();
	const { setUser } = useContext(UserContext);
	const { setReceipt } = useContext(ReceiptsContext);

	useEffect(() => {
		(async () => {
			const response = await logout();
			if (response) {
				await setUser({ logged: false });
				await setReceipt(null);
				localStorage.removeItem('logged');
				localStorage.removeItem('user');
				history.push('/login');
			}
		})();
	}, [history, setUser]);

	return (
		<MainContainer
			CSSoverrideOuter="outer-container"
			CSSoverrideInner="inner-container"
		>
			<div />
		</MainContainer>
	);
}

export default Logout;
