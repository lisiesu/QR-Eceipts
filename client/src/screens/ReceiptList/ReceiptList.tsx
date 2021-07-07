import './ReceiptList.css';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserReceipts } from '../../services/ServerAPIServices';
import MainContainer from '../../components/Main/MainContainer';
import ReceiptListItem from '../../components/Receipt/ReceiptListItem/ReceiptListItem';
import { Receipt } from '../../interfaces/types';
import { ReceiptsContext } from '../../contexts/receipts-context';

function ReceiptList(): JSX.Element {
	const [unfilteredData, setUnfilteredData] = useState<Receipt[]>([]);
	const [filteredData, setFilteredData] = useState<Receipt[]>([]);
	const [isVisible, setIsVisible] = useState(false);
	const { setReceipt } = useContext(ReceiptsContext);
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const allReceipts = await getUserReceipts();
			setUnfilteredData(allReceipts);
			setFilteredData(allReceipts);
		})();
	}, []);

	const showSearchbar = () => {
		isVisible === false ? setIsVisible(true) : setIsVisible(false);
	};

	const handleSearch = (event) => {
		const { value } = event.target;
		const searchString = value.toLowerCase().trim();
		let result = [];
		result = unfilteredData.filter((element) =>
			element.category.name.toLowerCase().includes(searchString) ||
			element.store.name.toLowerCase().includes(searchString) ||
			element.total.toString().toLowerCase().includes(searchString) ||
			element.currency.toLowerCase().includes(searchString) ||
			element.timeOfPurchase.toString().toLowerCase().includes(searchString)
				? result.push(element)
				: false
		);
		setFilteredData(result);
	};

	const handleClick = async (receipt) => {
		await setReceipt(receipt);
		history.push(`/receipt/${receipt.id}`);
	};

	const receipts = filteredData.map((el) => (
		<div onClick={() => handleClick(el)}>
			<ReceiptListItem
				key={el.id}
				receipt={el}
				logo={el.store.logo}
				merchantName={el.store.name}
				timeOfPurchase={el.timeOfPurchase}
				category={el.category.name}
				currency={el.currency}
				total={el.total}
			/>
		</div>
	));

	return (
		<>
			<div className="searchBar">
				<div className="searchWrapper">
					<label htmlFor="search">
						<div onClick={() => showSearchbar()}>
							<img
								src="/assets/logos/categories/png/search.png"
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
