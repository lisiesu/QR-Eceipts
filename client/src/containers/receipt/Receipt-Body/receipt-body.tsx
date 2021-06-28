import './receipt-body.css';
import React from 'react';

function ReceiptBody(): JSX.Element {
	return (
		<div className="Receipt-Body">
			<div className="Company-Details">
				<p className="Company-Name">Sainsbury&apos;s</p>
				<p className="Company-Logo">Sainsbury&apos;s</p>
			</div>
			<div className="Time-Container">
				<p className="Timestamp">12th May 2021 15:50pm</p>
				<p className="Circle">🦞</p>
			</div>
			<div className="Item-List-Container">
				<ul className="List">
					<li className="List-item">Pizza 4 Stazzione</li>
					<li className="List-item">Strongbow Cider</li>
					<li className="List-item">Chicken breast fillets</li>
					<li className="List-item">Ice cream</li>
				</ul>
			</div>
			<div className="Total-Container">
				<div className="Price-Container">
					<p className="Total-Title">Total:</p>
					<p className="Total-Price">€16.50</p>
				</div>
				<p className="Receipt-Id">Id: 2793927</p>
			</div>
		</div>
	);
}

export default ReceiptBody;
