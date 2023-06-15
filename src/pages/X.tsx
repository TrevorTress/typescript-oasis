import { useState, useEffect, FC } from 'react';
import styled from 'styled-components';

interface XXXProps {
	className?: string;
}

const XXXComp: FC<XXXProps> = ({ className }) => {
	return (
		<>
			<h1 className={className}>XXX</h1>
		</>
	);
};

const XXX = styled(XXXComp)``;

export default XXX;
