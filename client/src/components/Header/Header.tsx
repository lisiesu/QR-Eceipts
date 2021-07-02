import React from 'react';
import './Header.css';

import ReceiptBody from '../Receipt/ReceiptBody/ReceiptBody';
import ReceiptList from '../Receipt/ReceiptList/ReceiptList';
import Receipt from '../../interfaces/types';

interface Props {
	title: string;
}

function Header({ title }: Props): JSX.Element {
	return (
		<div className="Header">
			<p className="title">{title}</p>
			{title === 'Your Receipt!' ? (
				<ReceiptBody receipt={headerReceipt} />
			) : (
				<ReceiptList receipt={headerReceipt} />
			)}
		</div>
	);
}

export default Header;
