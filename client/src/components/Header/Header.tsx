import React from 'react';
import './Header.css';
import Logo from '../Svg/Logo';

function Header(): JSX.Element {
	const logo = '/assets/logos/qrreceiptsLogo.png';
	return (
		<div className="header">
			<Logo />
		</div>
	);
}

export default Header;
