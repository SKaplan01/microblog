import React, { Component } from 'react';
import BlogForm from '../Components/BlogForm';
import { connect } from 'react-redux';
import { addPost, editPost } from '../actionCreators';

// class FormContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.handleCancel = this.handleCancel.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleCancel() {
//     this.props.history.push('/');
//   }

//   //if url is "/new", this.props.isEdit will be falsy and addPost is called
//   //if url is "/edit", this.props.isEdit will be true and editPost is called
//   handleSubmit(post) {
//     this.props.isEdit ? this.props.editPost(post) : this.props.addPost(post);
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div>
//         <BlogForm
//           post={this.props.post}
//           submit={this.handleSubmit}
//           cancel={this.handleCancel}
//         />
//       </div>
//     );
//   }
// }

// //if url is "/edit", ownProps will url parameter with postId --> find that post by ID and pass form values
// //otherwise, passes undefined values for form
// function mapStateToProps(reduxState, ownProps) {
//   let post;
//   if (ownProps) {
//     post = reduxState.posts[ownProps.match.params.postid];
//   }
//   return {
//     post
//   };
// }

// const connectToReduxStore = connect(
//   mapStateToProps,
//   { addPost, editPost }
// );

// export default connectToReduxStore(FormContainer);
