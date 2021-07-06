import React from 'react';
import './PrintReceiptBody.css';
import { FiShoppingCart } from 'react-icons/fi';
import Moment from 'react-moment';
import PrintItemsList from '../PrintItemsList/PrintItemsList';
import { Receipt } from '../../../interfaces/types';
import Logo from '../../Svg/Logo';

interface Props {
	receipt: Receipt;
}

class PrintReceiptBody extends React.PureComponent<Props> {
	render(): JSX.Element {
		const { receipt } = this.props;
		const logo = '/assets/logos/qrreceiptsLogo.png';
		return (
			<div className="Print-Receipt-Container">
				<div className="Print-logo">
					<Logo />
				</div>
				<div className="Print-Receipt-Body">
					<div className="Print-Company-Details">
						<p className="Print-Company-Name">Hello!</p>
						<p className="Print-Company-Logo">{receipt.store.name}</p>
					</div>
					<div className="Print-Time-Container">
						<p className="Print-Timestamp">
							<Moment date={receipt.timeOfPurchase} format="MMM Do YYYY" />
						</p>
						<li className="Print-Shop-Icon-Circle">
							<p className="Print-Shop-Icon">
								<FiShoppingCart />
							</p>
						</li>
					</div>
					<PrintItemsList receipt={receipt} />
				</div>
			</div>
		);
	}
}

export default PrintReceiptBody;
