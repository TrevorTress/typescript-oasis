import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface HelmetProps {
	title?: string;
}

const HelmetComp: FC<HelmetProps> = ({ title }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta
				property="og:title"
				content="My Page Title"
			/>
		</Helmet>
	);
};

export default HelmetComp;
