import { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface FooterProps {
	className?: string;
	children?: ReactNode;
}
const ContentComp: FC<FooterProps> = ({ className, children }) => {
	return <section className={className}>{children}</section>;
};

// component that holds main page content (to the right of the navbar)
const Content = styled(ContentComp)`
	height: 100%;
	width: 100%;
	padding: 1.5rem;
	border-radius: 2rem;
	background: white;
	overflow: auto;

	@media screen and (max-width: 480px) {
		padding: 1rem;
	}
`;

export default Content;

// <Content></Content>
