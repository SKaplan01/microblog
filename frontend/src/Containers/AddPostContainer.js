import React, { Component } from 'react';
import BlogForm from '../Components/BlogForm';
import { connect } from 'react-redux';
import { addPostToApi } from '../actionCreators';

class AddPostContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.history.push('/');
  }

  //handleSubmit will call dispatch function addPost and redirect to homepage
  handleSubmit(post) {
    this.props.addPostToApi(post);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <BlogForm submit={this.handleSubmit} cancel={this.handleCancel} />
      </div>
    );
  }
}

const connectToReduxStore = connect(
  null,
  { addPostToApi }
);

export default connectToReduxStore(AddPostContainer);
