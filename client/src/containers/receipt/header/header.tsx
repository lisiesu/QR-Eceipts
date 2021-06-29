import React from 'react';
import './header.css';
import ReceiptBody from '../Receipt-Body/receipt-body';

function Header(): JSX.Element {
	return (
		<div className="Header">
			<p className="Header-Title">Your receipt!</p>
			<ReceiptBody />
		</div>
	);
}

export default Header;
