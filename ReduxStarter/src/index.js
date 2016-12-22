import React from 'react';
import ReactDOM from 'react-dom'

// Create new component to produce some html
const App = () => {
   //JSX - this gets transpiled to vanilla js
   return <div>Hi!</div>;
}

// Take generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
