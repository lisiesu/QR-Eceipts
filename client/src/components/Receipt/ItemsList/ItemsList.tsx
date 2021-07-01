import React from 'react';
import './ItemsList.css';
import PriceAndQR from '../PriceAndQR/PriceAndQR';

function ItemsList(): JSX.Element {
	return (
		<div>
			<div className="Item-List-Titles">
				<p>Item</p>
				<p>Price</p>
			</div>
			<div className="Item-List-Container">
				<ul className="List">
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
