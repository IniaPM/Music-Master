import React, { useState } from "react";
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';
import { render } from "@testing-library/react";

const API_ADDRESS = "http://jsfiddle.net/JMPerez/0u0v7e1b/";

function App() {
  const [state, setState] = useState({
    artist: null,
    tracks: [],
  });

    // componentDidMount() {
    //   this.searchArtist('bruno mars');
    // }

  searchArtist = artistQuery => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
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
  render()
    return (
      <div>
        <h2>Music Master</h2>
        <Search />
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} /> 
        <Tracks tracks={this.state.tracks}/>
      </div>
  );
}

export default App;
