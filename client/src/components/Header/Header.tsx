import React from 'react';
import './Header.css';

import ReceiptBody from '../Receipt/ReceiptBody/ReceiptBody';

interface Props {
	title: string;
}

function Header({ title }: Props): JSX.Element {
	return (
		<div className="Header">
			<p className="title">{title}</p>
			{title === 'Your Receipt!' ? <ReceiptBody /> : <ReceiptBody />}
		</div>
	);
}

export default Header;
