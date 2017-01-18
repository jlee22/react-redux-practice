import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('call action creator to fetch posts')
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
