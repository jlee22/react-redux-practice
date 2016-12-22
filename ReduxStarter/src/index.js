import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBXnEJjnhdACEkJdIpreisvfW8OjsmnBOE';

// Create new component to produce some html
const App = () => {
   //JSX - this gets transpiled to vanilla js
  return (
    <div>
      Search: <SearchBar />
    </div>
  );
}

// Take generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
