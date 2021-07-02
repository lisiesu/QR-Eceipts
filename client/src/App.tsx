import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/receipt/:id">
						<Header title="Your Receipt!" />
					</Route>
					<Route exact path="/receipt-list">
						<Header title="Your Receipts List" />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
