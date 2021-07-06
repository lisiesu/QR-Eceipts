import * as React from 'react';
import { Receipt } from '../interfaces/types';

const ReceiptsContext = React.createContext(null);

function ReceiptsProvider({
	children,
}: {
	children: JSX.Element;
}): JSX.Element {
	const [receipts, setReceipts] = React.useState<Receipt[] | []>([]);
	const [receipt, setReceipt] = React.useState<Receipt | null>(null);
	const value = { receipts, setReceipts, receipt, setReceipt };

	return (
		<ReceiptsContext.Provider value={value}>
			{children}
		</ReceiptsContext.Provider>
	);
}

export { ReceiptsContext, ReceiptsProvider };
