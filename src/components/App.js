import React, { useState } from "react";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

function App() {
  const [state, setState] = useState({
    artistQuery: "",
    artist: null,
    tracks: [],
  });

  const updateArtistQuery = (event) => {
    setState({ artistQuery: event.target.value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchArtist();
    }
  };

  const searchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${state.artistQuery}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0];

          console.log("artist", artist);
          setState({ artist });

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then((response) => response.json())
            .then((json) => setState({ tracks: json.tracks }))
            .catch((error) => alert(error.message));
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <h2>Music Master</h2>
      <input
        onChange={updateArtistQuery}
        onKeyPress={handleKeyPress}
        placeholder="Search for an Artist"
      />
      <button onClick={searchArtist}>Search</button>
    </div>
  );
}

export default App;
