import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <strong>{post.title}</strong>
            </Link>
            <span className="pull-xs-right">({post.categories})</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>
          Posts
          <Link to="/posts/new" className="btn btn-primary pull-xs-right">
            Add a Post
          </Link>
        </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
