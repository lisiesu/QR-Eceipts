import './receipt-body.css';
import React, { useState } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

function ReceiptBody(): JSX.Element {
	const [item, setItem] = useState<string>('');

	const receiptListButtonClick = (): void => {
		setItem('Pizza Cuatro Stagionne');
	};

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
				<div className="Item-List-Titles">
					<p>Item</p>
					<p>Price</p>
				</div>
				<div className="Item-List-Container">
					<ul className="List">
						<li className="List-item">{item}</li>
						<li className="List-item">Strongbow Cider</li>
						<li className="List-item">Chicken breast fillets</li>
						<li className="List-item">Ice cream</li>
						<li className="List-item">Chocolate Chip Cookies</li>
						<li className="List-item">Cheese Crackers</li>
					</ul>
				</div>
				<div className="Total-Container">
					<div className="Price-Container">
						<p className="Total-Title">Total:</p>
						<p className="Total-Price">£16.50</p>
					</div>
					<p className="Receipt-Id">Id: 2793927</p>
				</div>
				<div className="Message-Container">
					<p>Thank you for shopping at Sainsbury&apos;s</p>
				</div>
				<div className="Receipt-Saved-Text">
					<li className="Tick-Container">
						<p className="Tick">
							<BiCheckCircle />
						</p>
					</li>
					<p className="Saved-Message">Your receipt has been saved!</p>
				</div>
				<div className="List-Button">
					<button
						type="button"
						onClick={receiptListButtonClick}
						className="Button-Text"
					>
						<p>View my receipts</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ReceiptBody;
