import React from 'react';
import './MainContainer.css';

type Props = {
	children: JSX.Element;
	CSSoverrideOuter?: string;
	CSSoverrideInner?: string;
};

function MainContainer({
	children,
	CSSoverrideOuter,
	CSSoverrideInner,
}: Props): JSX.Element {
	return (
		<main className={`main-container ${CSSoverrideOuter}`}>
			<div className={`main-innercontainer ${CSSoverrideInner}`}>
				{children}
			</div>
		</main>
	);
}

export default MainContainer;
