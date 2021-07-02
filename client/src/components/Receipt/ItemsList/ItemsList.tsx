import React from 'react';
import './ItemsList.css';
import Items from '../Items/Items';
import PriceAndQR from '../PriceAndQR/PriceAndQR';
import { ProductInterface } from '../../../interfaces/types';

interface Props {
	products: ProductInterface[];
}

function ItemsList({ products }: Props): JSX.Element {
	const items = products.forEach((el) => <Items item={el.product} />);
	return (
		<div>
			{console.log(items)}
			<div className="Item-List-Titles">
				<p>Item</p>
				<p>Price</p>
			</div>
			<div className="Item-List-Container">
				<ul className="List">
					{items}
					<li className="List-item">Pizza Margarita</li>
					<li className="List-item">Strongbow Cider</li>
					<li className="List-item">Chicken breast fillets</li>
					<li className="List-item">Ice cream</li>
					<li className="List-item">Chocolate Chip Cookies</li>
					<li className="List-item">Cheese Crackers</li>
				</ul>
			</div>
			<PriceAndQR />
			<div className="Message-Container">
				<p>Thank you for shopping at Sainsbury&apos;s</p>
			</div>
		</div>
	);
}

export default ItemsList;
