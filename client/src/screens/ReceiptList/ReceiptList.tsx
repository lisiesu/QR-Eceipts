import React from 'react';
import './ReceiptList.css';
import { getUserReceipts } from '../../services/ServerAPIServices';
import ReceiptListItem from '../../components/Receipt/ReceiptListItem/ReceiptListItem';

function ReceiptList(user_Id: string): JSX.Element {
	const receipts = getUserReceipts('user7').map((el) => (
		<ReceiptListItem
			key={el.id}
			logo={el.store.logo}
			merchantName={el.store.name}
			timeOfPurchase={el.timeOfPurchase}
			category={el.category.logotype}
			total={el.total}
		/>
	));

	return (
		<div className="Receipt-Container">
			<div className="Receipt-Body">
				{receipts}
				{receipts}
			</div>
		</div>
	);
}

export default ReceiptList;
