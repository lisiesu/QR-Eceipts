import React from 'react';
import './Header.css';

import ReceiptBody from '../Receipt/ReceiptBody/ReceiptBody';
import Receipt from '../../interfaces/types';

interface Props {
	headerReceipt: Receipt | Receipt[];
	title: string;
}

function Header({ headerReceipt, title }: Props): JSX.Element {
	return (
		<div className="Header">
			<p className="title">{title}</p>
			{title === 'Your Receipt!' ? (
				<ReceiptBody receipt={headerReceipt} />
			) : (
				<ReceiptBody receipt={headerReceipt} />
			)}
		</div>
	);
}

export default Header;
