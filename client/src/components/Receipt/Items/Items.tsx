import React from 'react';
import './Items.css';
import { ProductInterface } from '../../../interfaces/types';

interface Props {
	item: ProductInterface['product'];
}

function Items({ item }: Props): JSX.Element {
	return (
		<div>
			{console.log('hi', item)}

			<li>{item}</li>
		</div>
	);
}

export default Items;
