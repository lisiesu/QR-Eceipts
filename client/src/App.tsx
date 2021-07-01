import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import * as service from './services/ServerAPIServices';
import Receipt from './interfaces/types';

function App(): JSX.Element {
	const [receipts, setReceipts] = useState<Receipt>();

	useEffect(() => {
		service.getReceiptByid('3').then((el) => setReceipts(el));
	}, []);

	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/receipt/:id">
						<Header headerReceipt={receipts} title="Your Receipt!" />
					</Route>
					<Route exact path="/receipt-list">
						<Header headerReceipt={receipts} title="Your Receipts List" />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
