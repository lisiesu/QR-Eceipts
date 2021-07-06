import React from 'react';

function BG(): JSX.Element {
	return (
		<svg width="376" height="812" xmlns="http://www.w3.org/2000/svg">
			<mask
				id="mask0"
				mask-type="alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="376"
				height="812"
			>
				<path d="M375.5 0H0.5V812H375.5V0Z" fill="" />
			</mask>
			<g mask="url(#mask0)">
				<path
					d="M375.5 812V0C375.5 0 314.104 51.8989 263.5 69C169.38 95.8351 55.885 90.8431 31 106C5 116 0.5 132 0.5 132V812H375.5Z"
					fill="#248CCE"
				/>
				<g filter="url(#filter0_dddddd)">
					<path
						d="M181.323 86.4901C299.832 73.8221 345.826 23.8342 375.5 0H0.5V132C23.705 94.7773 62.815 99.1581 181.323 86.4901Z"
						fill="url(#paint0_linear)"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_dddddd"
					x="-79.5"
					y="0"
					width="535"
					height="312"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="2.76726" />
					<feGaussianBlur stdDeviation="1.1069" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="6.6501" />
					<feGaussianBlur stdDeviation="2.66004" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_dropShadow"
						result="effect2_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="12.5216" />
					<feGaussianBlur stdDeviation="5.00862" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0"
					/>
					<feBlend
						mode="normal"
						in2="effect2_dropShadow"
						result="effect3_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="22.3363" />
					<feGaussianBlur stdDeviation="8.93452" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0"
					/>
					<feBlend
						mode="normal"
						in2="effect3_dropShadow"
						result="effect4_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="41.7776" />
					<feGaussianBlur stdDeviation="16.711" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0"
					/>
					<feBlend
						mode="normal"
						in2="effect4_dropShadow"
						result="effect5_dropShadow"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="100" />
					<feGaussianBlur stdDeviation="40" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
					/>
					<feBlend
						mode="normal"
						in2="effect5_dropShadow"
						result="effect6_dropShadow"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect6_dropShadow"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear"
					x1="188"
					y1="0"
					x2="188"
					y2="132"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#1AE8C3" />
					<stop offset="0.681818" stopColor="#1FC2C2" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default BG;
