import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './containers/Receipt/Header/header';
import service from './services/ServerAPIServices';

const userSeven = service.getUserReceipts('user7');

function App(): JSX.Element {
	return (
		<Router>
			{console.log(userSeven)}
			<div className="App">
				<Switch>
					<Route exact path="/receipt">
						<Header />
					</Route>
					<Route exact path="/receipt-list">
						<Header />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
