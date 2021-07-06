import React, { useState, useEffect, useRef } from 'react';
import './ReceiptBody.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Moment from 'react-moment';
import ItemsList from '../../components/Receipt/ItemsList/ItemsList';
import PrintComponent from '../../components/PrintComponent/PrintComponent';
import { Receipt } from '../../interfaces/types';
import * as service from '../../services/ServerAPIServices';

function ReceiptBody(): JSX.Element {
	const { id } = useParams<{ id?: string }>();
	const history = useHistory();
	const clickHandler = () => {
		history.push('/receipt-list');
	};

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const [receipt, setReceipt] = useState<Receipt>();

	useEffect(() => {
		service.getReceiptByid(id).then((el) => setReceipt(el));
	}, [id]);

	return (
		<div className="Receipt-Container">
			{receipt ? (
				<div className="Receipt-Body">
					<div className="Company-Details">
						<p className="Company-Name">{receipt.store.name}</p>
						<p className="Company-Logo">{receipt.store.name}</p>
					</div>
					<div className="Time-Container">
						<p className="Timestamp">
							<Moment date={receipt.timeOfPurchase} format="MMM Do YYYY" />
						</p>
						<li className="Shop-Icon-Circle">
							<p className="Shop-Icon">
								<FiShoppingCart />
							</p>
						</li>
					</div>
					<ItemsList receipt={receipt} />
					<div className="Receipt-Saved-Text">
						<li className="Tick-Container">
							<p className="Tick">
								<BiCheckCircle />
							</p>
						</li>
						<p className="Saved-Message">Your receipt has been saved!</p>
					</div>
					<div className="listButton">
						<button
							className="Button-Text"
							type="submit"
							onClick={() => {
								clickHandler();
							}}
						>
							View all your receipts
						</button>
					</div>
					<div style={{ display: 'none' }}>
						<PrintComponent ref={componentRef} receipt={receipt} />
					</div>
					<div>
						<button type="button" onClick={handlePrint}>
							Print this out!
						</button>
					</div>
				</div>
			) : (
				<div> Loading...</div>
			)}
		</div>
	);
}

export default ReceiptBody;
