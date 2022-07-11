import React, { useState } from 'react';

function Search(props) {
	const [state, setState] = useState({ artistQuery: '' });

	const searchArtist = () => {
		props.searchArtist(state.artistQuery);
	};

	const handleUpdateArtistQuery = (event) => {
		setState({ artistQuery: event.target.value });
	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			props.searchArtist();
		}
	};

	return (
		<div>
			<input
				onChange={handleUpdateArtistQuery}
				onKeyPress={handleKeyPress}
				placeholder="Search for an Artist"
			/>
			<button onClick={searchArtist}>Search</button>
		</div>
	);
}

export default Search;
