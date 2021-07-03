import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ReceiptBody from './screens/ReceiptBody/ReceiptBody';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/receipt/:id" component={ReceiptBody} />
					<Route exact path="/receipt-list" component={ReceiptBody} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
