import './PriceAndQR.css';
import React from 'react';
import { Receipt } from '../../../interfaces/types';

interface Props {
	receipt: Receipt;
}

function PriceAndQR({ receipt }: Props): JSX.Element {
	return (
		<div className="Price-QR-Container">
			<div className="Price-Container">
				<p className="Total-Title">Total:</p>
				<p className="Total-Price">
					{receipt.currency}
					{receipt.total}
				</p>
			</div>
			<p className="Receipt-Id">{receipt.id} </p>
		</div>
	);
}

export default PriceAndQR;
