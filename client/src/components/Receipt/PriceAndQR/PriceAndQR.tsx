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
			<div className="QR-Container">
				<div className="QR-svg">
					<img src="/assets/images/sampleQR.png" />
				</div>
				<div className="Receipt-Id">Id:{receipt.id}</div>
			</div>
		</div>
	);
}

export default PriceAndQR;
