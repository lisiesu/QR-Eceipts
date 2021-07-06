import React, { useEffect, useContext } from 'react';
import './ReceiptBody.css';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import MainContainer from '../../components/Main/MainContainer';
import ItemsList from '../../components/Receipt/ItemsList/ItemsList';
import { Receipt } from '../../interfaces/types';
import * as service from '../../services/ServerAPIServices';
import { ReceiptsContext } from '../../contexts/receipts-context';

function ReceiptBody(): JSX.Element {
	const { id } = useParams<{ id?: string }>();
	const history = useHistory();
	const { receipt, setReceipt } = useContext(ReceiptsContext);

	const clickHandler = () => {
		history.push('/receipt-list');
	};
	const merchantLogo = '/assets/logos/merchants/png/';
	const categoryLogo = '/assets/logos/categories/png/';

	useEffect(() => {
		if (!receipt) {
			(async () => {
				const response = await service.getReceiptByid(id);
				setReceipt(response);
			})();
		}
	}, [id, receipt, setReceipt]);

	return (
		<MainContainer>
			{receipt ? (
				<>
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
				</>
			) : (
				<div> Loading...</div>
			)}
		</MainContainer>
	);
}

export default ReceiptBody;
