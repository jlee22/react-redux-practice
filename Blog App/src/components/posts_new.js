import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render () {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // es5 syntax would be something like
    // const title = this.props.fields.title;
    // console.log(title);

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create Post</h3>
        <div className="form-group">
          <label>Title</label>
          <label type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <label type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
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
