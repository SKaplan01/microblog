import React, { Component } from 'react';
import BlogForm from '../Components/BlogForm';
import { connect } from 'react-redux';
import { addPost, editPost } from '../actionCreators';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.history.push('/');
  }

  handleSubmit(post) {
    this.props.isEdit ? this.props.editPost(post) : this.props.addPost(post);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <BlogForm
          post={this.props.post}
          submit={this.handleSubmit}
          cancel={this.handleCancel}
        />
      </div>
    );
  }
}

function mapStateToProps(reduxState, ownProps) {
  let post;
  if (this.props) {
    post = reduxState.posts[ownProps.match.params.postid];
  }
  return {
    post
  };
}

const connectToReduxStore = connect(
  mapStateToProps,
  { addPost, editPost }
);

export default connectToReduxStore(FormContainer);
