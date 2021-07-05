import React from 'react';
import './ReceiptList.css';
import { getUserReceipts } from '../../services/ServerAPIServices';
import MainContainer from '../../components/Main/MainContainer';
import ReceiptListItem from '../../components/Receipt/ReceiptListItem/ReceiptListItem';

function ReceiptList(user_Id: string): JSX.Element {
	const route = '/receipt/';
	const receipts = getUserReceipts('user7').map((el) => (
		<a href={route + el.id}>
			<ReceiptListItem
				key={el.id}
				logo={el.store.logo}
				merchantName={el.store.name}
				timeOfPurchase={el.timeOfPurchase}
				category={el.category.logotype}
				total={el.total}
			/>
		</a>
	));

	return (
		<MainContainer>
			<>
				{receipts}
				{receipts}
			</>
		</MainContainer>
	);
}

export default ReceiptList;
