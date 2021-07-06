import React from 'react';
import Moment from 'react-moment';
import './ReceiptListItem.css';
import { Receipt } from '../../../interfaces/types';

interface Props {
	receipt: Receipt;
	logo: string;
	merchantName: string;
	timeOfPurchase: Date;
	category: string;
	currency: string;
	total: number;
}

function ReceiptListItem({
	receipt,
	logo,
	merchantName,
	timeOfPurchase,
	category,
	currency,
	total,
}: Props): JSX.Element {
	const logosPath = `/assets/logos/merchants/png/${logo}`;
	const categoryLogo = `/assets/logos/categories/png/${category}`;
	return (
		<div className="listItemContainer">
			<div className="logo">
				<img src={logosPath} />
			</div>
			<div className="merchantName">{merchantName}</div>
			<span className="date">
				<Moment date={timeOfPurchase} format="MMM Do YYYY" />
			</span>
			<div className="category">
				<img src={categoryLogo} />
			</div>
			<div className="total">
				{currency === '£' ? currency + total : total + currency}
			</div>
		</div>
	);
}

export default ReceiptListItem;
