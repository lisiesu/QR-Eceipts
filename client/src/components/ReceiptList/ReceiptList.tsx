import React from 'react';
import './ReceiptList.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import ItemsList from '../Receipt/ItemsList/ItemsList';
import { Receipt } from '../../interfaces/types';

function ReceiptList(receipt: Receipt): JSX.Element {
	const history = useHistory();
	const clickHandler = () => {
		history.push('/receipt-list');
	};

	return (
		<div className="Receipt-Container">
			<div className="Receipt-Body" />
		</div>
	);
}

export default ReceiptList;
