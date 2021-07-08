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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="85"
						height="80"
						viewBox="4 3 29 29"
					>
						<path
							stroke="#000000"
							d="M4 4.5h7m1 0h2m2 0h5m2 0h2m1 0h7M4 5.5h1m5 0h1m1 0h3m1 0h4m2 0h1m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h1m1 0h2m3 0h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m2 0h2m1 0h1m1 0h3m2 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m4 0h4m1 0h2m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h2m1 0h3m1 0h1m2 0h3M6 12.5h3m1 0h1m1 0h3m1 0h1m1 0h6m1 0h3m2 0h3M5 13.5h1m1 0h1m1 0h1m1 0h5m6 0h4m1 0h3m2 0h1M4 14.5h3m1 0h4m1 0h5m2 0h2m2 0h1m4 0h2M5 15.5h2m2 0h1m1 0h1m3 0h1m1 0h4m2 0h1m2 0h1m2 0h3M4 16.5h1m4 0h2m2 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h4m1 0h2M4 17.5h1m2 0h3m2 0h1m1 0h1m4 0h2m3 0h3m2 0h1m1 0h1M4 18.5h1m2 0h1m2 0h2m1 0h7m2 0h1m2 0h1m2 0h1m3 0h1M4 19.5h1m3 0h2m2 0h1m1 0h1m1 0h2m1 0h3m1 0h3m2 0h2m1 0h2M4 20.5h1m1 0h3m1 0h2m2 0h1m1 0h1m2 0h2m3 0h1m2 0h1m1 0h2m1 0h1M4 21.5h1m1 0h4m5 0h1m1 0h8m5 0h3M4 22.5h1m5 0h4m1 0h1m3 0h1m1 0h2m4 0h1M4 23.5h1m1 0h4m2 0h1m3 0h2m2 0h1m1 0h1m1 0h1m1 0h6M4 24.5h1m1 0h1m3 0h1m1 0h1m1 0h1m4 0h2m1 0h1m1 0h5M12 25.5h1m1 0h1m2 0h2m2 0h2m1 0h1m3 0h2m1 0h2M4 26.5h7m3 0h1m2 0h1m6 0h1m1 0h1m1 0h1M4 27.5h1m5 0h1m3 0h2m2 0h1m1 0h1m1 0h1m1 0h1m3 0h2M4 28.5h1m1 0h3m1 0h1m1 0h2m1 0h2m3 0h1m1 0h1m1 0h8M4 29.5h1m1 0h3m1 0h1m1 0h2m1 0h2m1 0h2m4 0h1m1 0h1m2 0h1m1 0h1M4 30.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h1m2 0h1m5 0h1m1 0h4M4 31.5h1m5 0h1m2 0h4m1 0h1m2 0h1m6 0h2m1 0h1M4 32.5h7m2 0h1m2 0h1m1 0h1m2 0h1m1 0h1m1 0h2m1 0h1"
						/>
					</svg>
				</div>
				<div className="Receipt-Id">Id:{receipt.id}</div>
			</div>
		</div>
	);
}

export default PriceAndQR;
