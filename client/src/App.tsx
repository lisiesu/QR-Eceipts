import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ReceiptBody from './screens/ReceiptBody/ReceiptBody';
import ReceiptList from './screens/ReceiptList/ReceiptList';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/receipt/:id" component={ReceiptBody} />
					<Route exact path="/receipt-list" component={ReceiptList} />
					<Route exact path="/signup" component={ReceiptBody} />
					<Route exact path="/login" component={ReceiptBody} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
