import React from 'react';
import './ReceiptBody.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import ItemsList from '../ItemsList/ItemsList';
import Receipt from '../../../interfaces/types';

interface Props {
	receipt: Receipt | Receipt[];
}

function ReceiptBody({ receipt }: Props): JSX.Element {
	const { id } = useParams<{ id?: string }>();
	const history = useHistory();
	const clickHandler = () => {
		history.push('/receipt-list');
	};

	return (
		<div className="Receipt-Container">
			<h1>{id}</h1>
			<div className="Receipt-Body">
				<div className="Company-Details">
					<p className="Company-Name">Sainsburys</p>
					<p className="Company-Logo">Sainsburys</p>
				</div>
				<div className="Time-Container">
					<p className="Timestamp">12/04/2018</p>
					<li className="Shop-Icon-Circle">
						<p className="Shop-Icon">
							<FiShoppingCart />
						</p>
					</li>
				</div>
				<ItemsList />
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
			</div>
		</div>
	);
}

export default ReceiptBody;
