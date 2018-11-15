import React, { Component } from 'react';
import CommentList from '../Components/CommentList';
import NotFound from '../Components/NotFound';
import { connect } from 'react-redux';
import { deletePost, addComment, deleteComment } from '../actionCreators';

//Actual post => displays title, description and body
//Can edit and remove post
class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //Takes id as parameter, calls function passed from Redux => redirect to homepage
  handleDelete() {
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
  }

  //If post with this id doesn't exist, redirect to NotFound page
  render() {
    if (!this.props.post) {
      return <NotFound />;
    }
    return (
      <div>
        <h1>{this.props.post.postTitle}</h1>
        <button
          //redirect to edit form
          onClick={() => this.props.history.push(`/edit/${this.props.post.id}`)}
        >
          Edit
        </button>
        <button onClick={this.handleDelete}>Delete</button>
        <br />
        <i>{this.props.post.postDescription}</i>
        <p>{this.props.post.postBody}</p>
        <CommentList
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
          comments={this.props.post.comments}
          postId={this.props.post.id}
        />
      </div>
    );
  }
}

//find post from redux store using url param
function mapStateToProps(reduxState, ownProps) {
  return {
    post: reduxState.posts[ownProps.match.params.postid]
  };
}

const connectToReduxStore = connect(
  mapStateToProps,
  { deletePost, addComment, deleteComment }
);

export default connectToReduxStore(Post);
