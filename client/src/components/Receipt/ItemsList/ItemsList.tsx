import React from 'react';
import './ItemsList.css';
import Items from '../Items/Items';
import PriceAndQR from '../PriceAndQR/PriceAndQR';
import { ProductInterface } from '../../../interfaces/types';

interface Props {
	products: ProductInterface[];
}

function ItemsList({ products }: Props): JSX.Element {
	const items = products.map((el) => (
		<Items key={el.id} item={el.product} price={el.price} />
	));
	return (
		<div>
			{console.log(products)}
			<div className="Item-List-Titles">
				<p>Item</p>
				<p>Price</p>
			</div>
			<div className="Item-List-Container">
				<ul className="List">{items}</ul>
			</div>
			<PriceAndQR />
			<div className="Message-Container">
				<p>Thank you for shopping at Tesco&apos;s, have a great day!</p>
			</div>
		</div>
	);
}

export default ItemsList;
