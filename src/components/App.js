import React, { useState } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDRESS = 'http://jsfiddle.net/JMPerez/0u0v7e1b/';

function App() {
	const [state, setState] = useState({
		artist: null,
		tracks: [],
	});

	const searchArtist = (artistQuery) => {
		fetch(`${API_ADDRESS}/artist/${artistQuery}`)
			.then((response) => response.json())
			.then((json) => {
				if (json.artists.total > 0) {
					const artist = json.artists.items[0];
					console.log('artist', artist);
					setState({ artist });

					fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
						.then((response) => response.json())
						.then((json) => {
							const tracks = json.tracks;
							setState({ ...state, tracks });
							console.log('tracks', tracks);
						})
						.catch((error) => alert(error.message));
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div>
			<h2>Music Master</h2>
			<Search searchArtist={searchArtist} />
			{/* <Artist artist={state.artist} />
      <Tracks tracks={state.tracks} /> */}
		</div>
	);
}

export default App;
