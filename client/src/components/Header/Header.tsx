import React, { useContext } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Svg/Logo';
import { UserContext } from '../../contexts/user-context';

function Header(): JSX.Element {
	const { user } = useContext(UserContext);
	const location = useLocation();
	const path = location.pathname;

	const loginOrSignupOrLogout =
		path === '/login' ||
		path === '/signup' ||
		path === '/logout' ||
		path === '/';

	return (
		<div className="header">
			{!loginOrSignupOrLogout && user.logged ? (
				<Link className="logout" to="/logout">
					<p className="logoutText">Logout</p>
				</Link>
			) : (
				<span className="logout invisible">
					<p className="logoutText invisible">Logout</p>
				</span>
			)}
			<Logo />
		</div>
	);
}

export default Header;
