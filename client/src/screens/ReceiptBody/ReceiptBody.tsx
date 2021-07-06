import React, { useState, useEffect, useRef } from 'react';
import './ReceiptBody.css';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Moment from 'react-moment';
import MainContainer from '../../components/Main/MainContainer';
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
	const merchantLogo = '/assets/logos/merchants/png/';
	const categoryLogo = '/assets/logos/categories/png/';
	useEffect(() => {
		service.getReceiptByid(id).then((el) => setReceipt(el));
	}, [id]);

	return (
		<MainContainer>
			{receipt ? (
				<div>
					<div className="Company-Details">
						<p className="Company-Name">{receipt.store.name}</p>
						<img
							className="Category-Logo"
							src={categoryLogo + receipt.category.logotype}
						/>
						<img
							className="Company-Logo"
							src={merchantLogo + receipt.store.logo}
						/>
					</div>
					<div className="Timestamp">
						<Moment date={receipt.timeOfPurchase} format="MMM Do YYYY" />
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
							onClick={() => clickHandler()}
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
		</MainContainer>
	);
}

export default ReceiptBody;
