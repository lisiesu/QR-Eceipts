import React, { useEffect, useContext, useRef, useState } from 'react';
import './ReceiptBody.css';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
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
	const history = useHistory();
	const { receipt, setReceipt } = useContext(ReceiptsContext);
	const [saved, setSaved] = useState(false);

	const clickHandler = () => {
		history.push('/receipt-list');
	};

	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const merchantLogo = '/assets/logos/merchants/png/';
	const categoryLogo = `/assets/logos/categories/png/${receipt.category.name}.png`;

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
						<img className="Category-Logo" src={categoryLogo} />
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
						<button
							className="Button-Text"
							type="submit"
							onClick={() => clickHandler()}
						>
							View receipts
						</button>
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
