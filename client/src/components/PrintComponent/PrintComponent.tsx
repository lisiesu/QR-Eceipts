import React, { useState, useEffect } from 'react';
import './PrintComponent.css';
import { FiShoppingCart } from 'react-icons/fi';
import { BiCheckCircle } from 'react-icons/bi';
import { MemoryRouterProps, useHistory, useParams } from 'react-router-dom';
import Moment from 'react-moment';
import { render } from '@testing-library/react';
import ItemsList from '../Receipt/ItemsList/ItemsList';
import { Receipt } from '../../interfaces/types';
import * as service from '../../services/ServerAPIServices';

interface Props {
	receipt: Receipt;
}

class PrintComponent extends React.PureComponent<Props> {
	render() {
		const { receipt } = this.props;
		return (
			<div className="Receipt-Container">
				<div className="Receipt-Body">
					<div className="Company-Details">
						<p className="Company-Name">{receipt.store.name}</p>
						<p className="Company-Logo">{receipt.store.name}</p>
					</div>
					<div className="Time-Container">
						<p className="Timestamp">
							<Moment date={receipt.timeOfPurchase} format="MMM Do YYYY" />
						</p>
						<li className="Shop-Icon-Circle">
							<p className="Shop-Icon">
								<FiShoppingCart />
							</p>
						</li>
					</div>
					<ItemsList receipt={receipt} />
				</div>
				)
			</div>
		);
	}
}

export default PrintComponent;
