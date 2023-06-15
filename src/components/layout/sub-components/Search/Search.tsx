import { useState, useEffect, useRef, RefObject, FC, ReactNode } from 'react';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import data from './search-data/-SafetyData';

interface SearchResultItem {
	link: string;
	color: string;
	tab: string;
	section: string;
	page: string;
}

interface SearchProps {
	className?: string;
}
interface SearchBlurProps {
	children?: ReactNode;
}

// function for our SearchBlur component (to hide results if you click away)
function useSearchBlur(ref: RefObject<HTMLDivElement>) {
	useEffect(() => {
		function handleOutsideClick(event: MouseEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				const results = document.getElementById('results');
				if (results) {
					results.style.display = 'none';
				}
			}
		}

		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [ref]);
}
// SearchBlur component
const SearchBlur: FC<SearchBlurProps> = ({ children }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	useSearchBlur(wrapperRef);

	return <div ref={wrapperRef}>{children}</div>;
};

// fuse config options
const options: Fuse.IFuseOptions<any> = {
	keys: ['tab', 'page'],
	minMatchCharLength: 2,
	threshold: 0.3,
};

// search bar component
const Search: FC<SearchProps> = ({ className }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState<SearchResultItem[]>([]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchTerm(value);

		const fuse = new Fuse<SearchResultItem>(data, options);
		const results = fuse.search(value) as Fuse.FuseResult<SearchResultItem>[];
		const formattedResults = results.map((result) => result.item);
		setResults(formattedResults);
		const resultsElement = document.getElementById('results');
		if (resultsElement) {
			resultsElement.style.display = 'block';
		}
	};

	return (
		<SearchBlur>
			<div className={className}>
				<div className="search-bar">
					<FaSearch size={20} />
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearch}
						placeholder="Search for items"
					/>
					{results.length > 0 && (
						<ul id="results">
							{results.map((item) => {
								return (
									<li>
										<a
											href={item.link}
											style={{ color: `${item.color}` }}
										>
											{item.tab} ({item.section} &gt; {item.page})
										</a>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		</SearchBlur>
	);
};

const SearchBar = styled(Search)`
	z-index: 20;
	height: 5.5vh;
	margin: 0.7vh 2.5vw;

	.search-bar {
		display: flex;
		justify-content: right;
		float: right;
		height: 100%;
		width: 36vw;
		margin: 0 auto;
	}

	& svg {
		display: block;
		margin: auto 5px;
		color: white;
	}
	& input {
		height: 5vh;
		width: 90%;
		margin: auto 10px;
		border-radius: 1em;
		padding: 10px;
	}

	& ul {
		z-index: 5;
		position: absolute;
		display: none;
		top: 7%;
		padding: 0;
		background: lightgrey;
		width: 30vw;
		margin: auto;
		list-style: none;
		font-size: 16px;
		font-weight: bold;
		border: solid black;
		border-radius: 1rem;

		& li {
			border-top: solid black 1px;
			border-bottom: solid black 1px;
			padding: 10px;
			& a {
				text-decoration: none;
				text-shadow: 0.5px 0.3px 1px black;
			}
		}
	}

	@media screen and (max-width: 480px) {
		.search-bar,
		ul {
			width: 54vw;
			font-size: 10px;
		}

		input {
			font-size: 12px;
		}
	}
`;

export default SearchBar;
