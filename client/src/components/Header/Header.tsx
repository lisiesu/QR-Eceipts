import React from 'react';
import './Header.css';
import Logo from '../Svg/Logo';

function Header(): JSX.Element {
	return (
		<div className="header">
			<Logo />
		</div>
	);
}

export default Header;
