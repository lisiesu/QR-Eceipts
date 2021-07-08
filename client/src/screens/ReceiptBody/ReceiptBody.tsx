import React, { useEffect, useContext, useRef, useState } from 'react';
import './ReceiptBody.css';
import { BiCheckCircle } from 'react-icons/bi';
import { useParams, Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Moment from 'react-moment';
import MainContainer from '../../components/Main/MainContainer';
import ItemsList from '../../components/Receipt/ItemsList/ItemsList';
import SavedMessage from '../../components/Receipt/SavedMessage/SavedMessage';
import PrintReceiptBody from '../../components/PrintComponent/PrintReceiptBody/PrintReceiptBody';
import { Receipt } from '../../interfaces/types';
import * as service from '../../services/ServerAPIServices';
import { ReceiptsContext } from '../../contexts/receipts-context';
import { UserContext } from '../../contexts/user-context';

function ReceiptBody(): JSX.Element {
	const { id } = useParams<{ id?: string }>();
	const { receipt, setReceipt } = useContext(ReceiptsContext);
	const { user } = useContext(UserContext);

	const [saved, setSaved] = useState(false);

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const merchantLogo = '/assets/logos/merchants/png/';

	useEffect(() => {
		if (!receipt) {
			(async () => {
				const response = await service.getReceiptByid(id);
				console.log(response);
				setReceipt(response);
				setSaved(response.receiptUpdated);
			})();
		}
	}, [id, receipt, setReceipt]);

	// receipt && receipt.store --> checking both because server is aways returning an object
	return (
		<MainContainer>
			{receipt && receipt.store ? (
				<div>
					<div className="Company-Details">
						<p className="Company-Name">{receipt.store.name}</p>
						<img
							className="Category-Logo"
							src={`/assets/logos/categories/png/${receipt.category.name}.png`}
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
					{saved ? <SavedMessage /> : null}

					<div className="listButton">
						{user.logged ? (
							<Link to="/receipt-list">
								<button className="Button-Text" type="submit">
									View receipts
								</button>
							</Link>
						) : (
							<Link to="/">
								<button className="Button-Text" type="submit">
									Save Receipt
								</button>
							</Link>
						)}
						<div style={{ display: 'none' }}>
							<PrintReceiptBody ref={componentRef} receipt={receipt} />
						</div>
						<div>
							<button
								className="Button-Text"
								type="button"
								onClick={handlePrint}
							>
								Print PDF
							</button>
						</div>
					</div>
				</div>
			) : (
				<div> Loading...</div>
			)}
		</MainContainer>
	);
}

export default ReceiptBody;
