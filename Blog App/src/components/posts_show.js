import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  render() {
    if (!this.props.post) {
      return <div>Loading...</div>
    }
    return <div>Show post {this.props.params.id}</div>;
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
