import React, { useState, useContext } from 'react';
import './SavedMessage.css';
import { BiCheckCircle } from 'react-icons/bi';
import { ReceiptsContext } from '../../../contexts/receipts-context';

function SavedMessage(): JSX.Element {
	const { receipt, setReceipt } = useContext(ReceiptsContext);

	const showSavedMessage = { display: 'initial' };
	return (
		<div style={showSavedMessage}>
			<div className="Receipt-Saved-Text">
				<li className="Tick-Container">
					<p className="Tick">
						<BiCheckCircle />
					</p>
				</li>
				<p className="Saved-Message">Your receipt has been saved!</p>
			</div>
		</div>
	);
}

export default SavedMessage;
