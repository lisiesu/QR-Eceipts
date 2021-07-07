import React from 'react';
import './Items.css';
import { ProductInterface, Receipt } from '../../../interfaces/types';

interface Props {
	item: ProductInterface['product'];
	price: ProductInterface['price'];
	currency: Receipt['currency'];
}

function Items({ item, price, currency }: Props): JSX.Element {
	return (
		<div className="Items">
			<span className="Item-Span">{item}</span>
			<span className="Price-Span">{currency + price}</span>
		</div>
	);
}

export default Items;
