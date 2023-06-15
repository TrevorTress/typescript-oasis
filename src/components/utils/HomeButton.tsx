import { FC, ReactElement } from 'react';
import React from 'react';
import styled from 'styled-components';

interface HomeButtonProps {
	className?: string;
	title?: string;
	img?: string;
	icon?: ReactElement;
	link?: string;
}

const HomeButtonComp: FC<HomeButtonProps> = ({ className, title, img, icon, link }) => {
	return (
		<>
			<a
				href={link}
				className={className}
			>
				<button>
					{icon && icon}
					{img && (
						<img
							src={img}
							alt={title}
						/>
					)}
					<h3>{title}</h3>
				</button>
			</a>
		</>
	);
};

const HomeButton = styled(HomeButtonComp)`
	text-decoration: none;
	margin: 10px;

	& button {
		width: 20vw;
		height: 30vh;
		padding: 0;
		margin: auto;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: end;
		transition: all 0.3s ease-in-out;
		background: #fff;

		& img {
			width: 100%;
			margin: auto;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}

		& svg {
			width: 100%;
			margin: auto;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}

		& h3 {
			width: 100%;
			padding: 10px;
			margin: 0 auto;
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
			background: var(--primary);
		}

		&:hover {
			transform: scale(1.01);
		}
	}

	@media screen and (max-width: 480px) {
		& button {
			width: 100%;
		}
	}
`;

export default HomeButton;
