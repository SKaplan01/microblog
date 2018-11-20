import React, { Component } from 'react';
import BlogForm from '../Components/BlogForm';
import { connect } from 'react-redux';
import { editPostApi } from '../actionCreators';

class EditPostContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.history.push(`/${this.props.match.params.postid}`);
  }

  //Handle submit will dispatch function editPostApi
  handleSubmit(post, postId) {
    this.props.editPostApi(post, postId);
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

//Find specific post using match props
function mapStateToProps(reduxState, ownProps) {
  return {
    post: reduxState.posts[ownProps.match.params.postid]
  };
}

const connectToReduxStore = connect(
  mapStateToProps,
  { editPostApi }
);

export default connectToReduxStore(EditPostContainer);
