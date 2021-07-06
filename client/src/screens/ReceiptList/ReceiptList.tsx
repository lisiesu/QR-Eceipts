import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReceiptList.css';
import { getUserReceipts } from '../../services/ServerAPIServices';
import MainContainer from '../../components/Main/MainContainer';
import ReceiptListItem from '../../components/Receipt/ReceiptListItem/ReceiptListItem';
import { Receipt } from '../../interfaces/types';

function ReceiptList(user_Id: string): JSX.Element {
	const [unfilteredData, setUnfilteredData] = useState<Receipt[]>([]);
	const [filteredData, setFilteredData] = useState(unfilteredData);
	const [isVisible, setIsVisible] = useState(false);

	const showSearchbar = () => {
		isVisible === false ? setIsVisible(true) : setIsVisible(false);
	};

	const handleSearch = (event) => {
		const { value } = event.target;
		let result = [];
		result = unfilteredData.filter(
			(data) => data.store.name.toLowerCase().search(value) != -1
		);
		setFilteredData(result);
	};

	useEffect(() => {
		const allReceipts = getUserReceipts('user7');
		setUnfilteredData(allReceipts);
		setFilteredData(allReceipts);
	}, []);

	const receipts = filteredData.map((el) => (
		<Link to={`/receipt/${el.id}`} key={el.id}>
			<ReceiptListItem
				key={el.id}
				receipt={el}
				logo={el.store.logo}
				merchantName={el.store.name}
				timeOfPurchase={el.timeOfPurchase}
				category={el.category.logotype}
				currency={el.currency}
				total={el.total}
			/>
		</Link>
	));

	return (
		<>
			<div className="searchBar">
				<div className="searchWrapper">
					<label htmlFor="search">
						<div onClick={() => showSearchbar()}>
							<img
								src="/assets/logos/categories/png/cat_1.png"
								alt="search icon"
							/>
						</div>
					</label>
					<input
						className={!isVisible ? 'hidden' : 'visible'}
						type="text"
						name="search"
						id="searchBar"
						onChange={(event) => handleSearch(event)}
					/>
				</div>
			</div>
			<MainContainer>
				<>{receipts}</>
			</MainContainer>
		</>
	);
}

export default ReceiptList;
