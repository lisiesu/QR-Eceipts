import React, { useState, useEffect } from 'react';
import './ReceiptBody.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory, useParams } from 'react-router-dom';
import ItemsList from '../ItemsList/ItemsList';
import { ProductInterface, Receipt } from '../../../interfaces/types';
import * as service from '../../../services/ServerAPIServices';

interface Props {
	receipt: Receipt;
	products: ProductInterface[];
}

function ReceiptBody(): JSX.Element {
	const { id } = useParams<{ id?: string }>();
	const history = useHistory();
	const clickHandler = () => {
		history.push('/receipt-list');
	};
	const [receipt, setReceipt] = useState<Receipt>();
	const [products, setProducts] = useState<ProductInterface>();

	useEffect(() => {
		service.getReceiptByid('1').then((el) => setReceipt(el));
	}, []);

	// useEffect(() => {
	// 	service.getUserReceipt(id).then((el) => setReceipt(el));
	// }, []);

	return (
		<div className="Receipt-Container">
			{receipt ? (
				<div className="Receipt-Body">
					<div className="Company-Details">
						<p className="Company-Name">{receipt.store.name}</p>
						<p className="Company-Logo">{receipt.store.name}</p>
					</div>
					<div className="Time-Container">
						<p className="Timestamp">12/04/2018</p>
						<li className="Shop-Icon-Circle">
							<p className="Shop-Icon">
								<FiShoppingCart />
							</p>
						</li>
					</div>
					<ItemsList products={receipt.products} />
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
			) : (
				<div> Loading...</div>
			)}
		</div>
	);
}

export default ReceiptBody;
