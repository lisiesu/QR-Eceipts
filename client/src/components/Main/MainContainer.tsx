import React from 'react';
import './MainContainer.css';

type Props = {
	children: JSX.Element;
};

function MainContainer({ children }: Props): JSX.Element {
	return (
		<main className="main-container">
			<div className="main-innercontainer">{children}</div>
		</main>
	);
}

export default MainContainer;
