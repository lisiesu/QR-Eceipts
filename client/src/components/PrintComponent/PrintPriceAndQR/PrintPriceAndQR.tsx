import './PrintPriceAndQR.css';
import React from 'react';
import { Receipt } from '../../../interfaces/types';

interface Props {
	receipt: Receipt;
}

function PrintPriceAndQR({ receipt }: Props): JSX.Element {
	return (
		<div className="Print-Price-QR-Container">
			<div className="Print-Price-Container">
				<p className="Print-Total-Title">Total:</p>
				<p className="Print-Total-Price">
					{receipt.currency}
					{receipt.total}
				</p>
			</div>
			<div className="Print-QR-Container">
				<div className="Print-QR-svg">
					<img src="/assets/images/sampleQR.png" />
				</div>
				<div className="Print-Receipt-Id">Id:{receipt.id}</div>
			</div>
		</div>
	);
}

export default PrintPriceAndQR;
