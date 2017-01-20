import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render () {
    return (
      <form>
        <h3>Create Post</h3>

        <div className="form-group">
          <label>Categories</label>
          <label type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <label type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <label type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  field: ['title', 'categories', 'content']
})(PostsNew);
