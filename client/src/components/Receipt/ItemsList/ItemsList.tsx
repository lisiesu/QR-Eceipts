import React from 'react';
import './ItemsList.css';
import Items from '../Items/Items';
import PriceAndQR from '../PriceAndQR/PriceAndQR';
import { Receipt } from '../../../interfaces/types';

interface Props {
	receipt: Receipt;
}

function ItemsList({ receipt }: Props): JSX.Element {
	const items = receipt.products.map((el) => (
		<Items
			key={el.id}
			item={el.product}
			price={el.price}
			currency={receipt.currency}
		/>
	));

	return (
		<>
			<div className="Item-List-Titles">
				<p>Item</p>
				<p>Price</p>
			</div>
			<div className="Item-List-Container">
				<ul>
					<li className="List">{items}</li>
				</ul>
			</div>
			<PriceAndQR receipt={receipt} />
			<div className="Message-Container">
				<p>
					{receipt.misc}Thank you for shopping at {receipt.store.name}, have a
					great day!
				</p>
			</div>
		</>
	);
}

export default ItemsList;
