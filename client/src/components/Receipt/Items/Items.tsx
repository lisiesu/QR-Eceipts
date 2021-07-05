import React from 'react';
import './Items.css';
import { ProductInterface } from '../../../interfaces/types';

interface Props {
	item: ProductInterface['product'];
	price: ProductInterface['price'];
}

function Items({ item, price }: Props): JSX.Element {
	return (
		<div>
			{item}, {price}
		</div>
	);
}

export default Items;
