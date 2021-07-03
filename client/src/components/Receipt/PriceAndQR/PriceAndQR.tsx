import './PriceAndQR.css';
import React from 'react';

function PriceAndQR(): JSX.Element {
	return (
		<div className="Price-QR-Container">
			<div className="Price-Container">
				<p className="Total-Title">Total:</p>
				<p className="Total-Price">£16.50</p>
			</div>
			<p className="Receipt-Id">Id: 2793927</p>
		</div>
	);
}

export default PriceAndQR;
