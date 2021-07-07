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
		path === '/login' || path === '/signup' || path === '/logout';

	return (
		<div className="header">
			<Logo />
			{!loginOrSignupOrLogout && user.logged ? (
				<Link to="/logout">Logout</Link>
			) : null}
		</div>
	);
}

export default Header;
