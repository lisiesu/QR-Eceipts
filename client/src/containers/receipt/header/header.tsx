import React from 'react';
import './header.css';
import ReceiptBody from '../Receipt-Body/receipt-body';
//	import { Receipt } from '../../../interfaces/types';

export interface Props {
	receipt: {
		id: string;
		timeOfPurchase: string;
		products: Product[];
		total: number;
		currency: string;
		paymentMethod: string;
		cardNumber: number;
		misc: string;
		user: string;
		store: string;
	};
}

export interface Product {
	product: string;
	price: number;
	vat: number;
	isRefunded: boolean;
}

function Header({ receipt }: Props): JSX.Element {
	return (
		<div className="Header">
			<p className="Header-Title">Your receipt!</p>
			<ReceiptBody receipt={receipt} />
		</div>
	);
}

export default Header;
