import React from 'react';
import './LogOrSign.css';
import { useHistory } from 'react-router-dom';
import Login from '../../../screens/Login/Login';
import Signup from '../../../screens/Signup/Signup';

function LogOrSign() {
	const history = useHistory();

	const handleClick = (buttonClicked) => {
		buttonClicked.id === 'login'
			? history.push('/login')
			: history.push('/signup');
	};
	return (
		<div className="logOrSign">
			<div className="title">
				<div className="main-title">
					<h1>Welcome to</h1>
					<h1>QR-Eceipts</h1>
				</div>
				<div className="button-wrapper">
					<button
						className="button"
						type="submit"
						onClick={() => history.push('/login')}
					>
						Log in
					</button>
				</div>
			</div>
			<div className="subtitle">
				<h2>Already a user?</h2>
				<div className="button-wrapper">
					<button
						className="button"
						type="submit"
						onClick={() => history.push('/signup')}
					>
						Sign up!
					</button>
				</div>
			</div>
		</div>
	);
}

export default LogOrSign;
