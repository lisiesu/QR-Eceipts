import React from 'react';
import './receipt-body.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import ItemsList from '../Items-List/items-list';

export interface Props {
	receipt: {
		id: string;
		timeOfPurchase: string;
		products: Product[];
		total: number;
		currency: string;
		paymentMethod: string;
		cardNumber: number;
		misc: string;
		user: string;
		store: string;
	};
}

export interface Product {
	product: string;
	price: number;
	vat: number;
	isRefunded: boolean;
}

function ReceiptBody({ receipt }: Props): JSX.Element {
	return (
		<div className="Receipt-Container">
			<div className="Receipt-Body">
				<div className="Company-Details">
					<p className="Company-Name">Sainsbury&apos;s</p>
					<p className="Company-Logo">Sainsbury&apos;s</p>
				</div>
				<div className="Time-Container">
					<p className="Timestamp">12th May 2021 15:50pm</p>
					<li className="Shop-Icon-Circle">
						<p className="Shop-Icon">
							<FiShoppingCart />
						</p>
					</li>
				</div>
				<ItemsList />
				<div className="Receipt-Saved-Text">
					<li className="Tick-Container">
						<p className="Tick">
							<BiCheckCircle />
						</p>
					</li>
					<p className="Saved-Message">Your receipt has been saved!</p>
				</div>
				<div className="List-Button">
					<div className="Button-Text">
						<p>View my receipts</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReceiptBody;
