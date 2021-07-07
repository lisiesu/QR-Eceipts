import React from 'react';
import './PrintItemsList.css';
import PrintItems from '../PrintItems/PrintItems';
import PrintPriceAndQR from '../PrintPriceAndQR/PrintPriceAndQR';
import { Receipt } from '../../../interfaces/types';

interface Props {
	receipt: Receipt;
}

function PrintItemsList({ receipt }: Props): JSX.Element {
	const items = receipt.products.map((el) => (
		<PrintItems
			key={el.id}
			item={el.product}
			price={el.price}
			currency={receipt.currency}
		/>
	));

	return (
		<div>
			<div className="Print-Item-List-Titles">
				<p>Item</p>
				<p>Price</p>
			</div>
			<div className="Print-Item-List-Container">
				<ul>
					<li className="Print-List">{items}</li>
				</ul>
			</div>
			<PrintPriceAndQR receipt={receipt} />
			<div className="Print-Message-Container">
				<p>
					{receipt.misc}Thank you for shopping at {receipt.store.name}, have a
					great day!
				</p>
			</div>
		</div>
	);
}

export default PrintItemsList;
