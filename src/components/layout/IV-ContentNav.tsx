import { FC } from 'react';
import styled from 'styled-components';
import Breadcrumb from './sub-components/Breadcrumb';
import Search from './sub-components/Search/Search';

interface ContentProps {
	className?: string;
	crumbs?: string[];
}

const ContentNavComp: FC<ContentProps> = ({ className, crumbs }) => {
	return (
		<nav className={className}>
			<Breadcrumb crumbs={crumbs} />
			<Search />
		</nav>
	);
};

const ContentNav = styled(ContentNavComp)`
	display: flex;
	justify-content: space-between;
`;

export default ContentNav;
