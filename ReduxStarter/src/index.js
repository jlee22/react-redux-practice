import React from 'react';

// Create new component to produce some html

const App = function() {
   //JSX - this gets transpiled to vanilla js
   return <div>Hi!</div>;
}

// Take generated html and put it on the page (in the DOM)

React.render(App);
