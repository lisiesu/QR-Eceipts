import React, { useState, useEffect } from 'react';
import './ReceiptList.css';
import { getUserReceipts } from '../../services/ServerAPIServices';
import MainContainer from '../../components/Main/MainContainer';
import ReceiptListItem from '../../components/Receipt/ReceiptListItem/ReceiptListItem';

function ReceiptList(user_Id: string): JSX.Element {
	const [unfilteredData, setUnfilteredData] = useState([]);
	const [filteredData, setFilteredData] = useState(unfilteredData);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const showSearchbar = () => {
		if (isVisible === false) setIsVisible(true);
		else setIsVisible(false);
	};

	const handleSearch = (event) => {
		const { value } = event.target;
		let result = [];
		console.log(value);
		result = unfilteredData.filter(
			(data) => data.store.name.toLowerCase().search(value) != -1
		);
		setFilteredData(result);
	};

	useEffect(() => {
		(async () => {
			const allReceipts = await getUserReceipts();
			setUnfilteredData(allReceipts);
			setFilteredData(allReceipts);
		})();
	}, []);

	const route = '/receipt/';
	const receipts = filteredData.map((el) => (
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
		<>
			<div className="searchBar">
				<div className="searchWrapper">
					<label htmlFor="search">
						<a href="#" onClick={() => showSearchbar()}>
							<img
								src="/assets/logos/categories/png/cat_1.png"
								alt="search icon"
							/>
						</a>
					</label>
					<input
						className="search input__field input__field--makiko"
						type="text"
						name="search"
						id={isVisible.toString()}
						onChange={(event) => handleSearch(event)}
					/>
				</div>
			</div>
			<MainContainer>
				<>
					{receipts}
					{receipts}
				</>
			</MainContainer>
		</>
	);
}

export default ReceiptList;
