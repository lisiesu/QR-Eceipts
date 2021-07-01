import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './containers/Receipt/Header/header';
import * as service from './services/ServerAPIServices';
import Receipt from './interfaces/types';

function App(): JSX.Element {
	const [receipts, setReceipts] = useState<Receipt>();
	//	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		service.getReceiptByid('3').then((el) => setReceipts(el));
	}, []);

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/receipt">
						<Header headerReceipt={receipts} />
						{console.log(receipts)}
					</Route>
					<Route exact path="/receipt-list">
						<Header headerReceipt={receipts} />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
