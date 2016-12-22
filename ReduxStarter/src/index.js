import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = "AIzaSyBXnEJjnhdACEkJdIpreisvfW8OjsmnBOE";


// Create new component to produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'hotdogs'}, (videos) => {
      this.setState({ videos});
      // ^ same as this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        Search: <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
