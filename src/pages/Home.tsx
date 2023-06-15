import { useState, useEffect, FC } from 'react';
import styled from 'styled-components';

interface HomeProps {
	className?: string;
}

const HomeComp: FC<HomeProps> = ({ className }) => {
	return (
		<>
			<h1 className={className}>Home</h1>
		</>
	);
};

const Home = styled(HomeComp)``;

export default Home;
