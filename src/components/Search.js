import React, { Component } from 'react';

class Search extends Component {
    state = { artistQuery: '' };

    updateArtistQuery = (event) => {
        setState({ artistQuery: event.target.value });
    }
    
    handleKeyPress = (event) => {
        if (event.key === "Enter") {
          searchArtist();
        }
    }

    searchArtist = () => {
      this.props.searchArtist(this.state.artistQuery);  
    }

    render() {
        return (
            <div>
              <input
                onChange={updateArtistQuery}
                onKeyPress={handleKeyPress}
                placeholder="Search for an Artist"
                />
                <button onClick={searchArtist}>Search</button>  
            </div>
        )
    }
}

export default Search;