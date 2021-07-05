import React from 'react';
import './Header.css';

function Header(): JSX.Element {
	const logo = 'assets/logos/qrreceiptsLogo.png';
	return (
		<div className="header">
			<img src={logo} alt="QR receipts logo" />
		</div>
	);
}

export default Header;
