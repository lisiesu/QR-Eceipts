import React from 'react';
import './header.css';
import ReceiptBody from '../Receipt-Body/receipt-body';
import Receipt from '../../../interfaces/types';

interface Props {
	headerReceipt: Receipt | Receipt[];
}

function Header({ headerReceipt }: Props): JSX.Element {
	return (
		<div className="Header">
			<p className="Header-Title">Your receipt!</p>
			<ReceiptBody receipt={headerReceipt} />
		</div>
	);
}

export default Header;
