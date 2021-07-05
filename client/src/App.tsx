import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ReceiptBody from './screens/ReceiptBody/ReceiptBody';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import ReceiptList from './screens/ReceiptList/ReceiptList';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/receipt/:id" component={ReceiptBody} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/receipt-list" component={ReceiptList} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
