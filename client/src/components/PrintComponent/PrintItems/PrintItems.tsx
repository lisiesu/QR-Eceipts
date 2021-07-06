import React from 'react';
import './PrintItems.css';
import { ProductInterface, Receipt } from '../../../interfaces/types';

interface Props {
	item: ProductInterface['product'];
	price: ProductInterface['price'];
	currency: Receipt['currency'];
}

function PrintItems({ item, price, currency }: Props): JSX.Element {
	return (
		<div className="Print-Items">
			<span>{item}</span>
			<span>{currency + price}</span>
		</div>
	);
}

export default PrintItems;
