import React, { Component } from 'react';
import CommentList from '../Components/CommentList';
import NotFound from '../Components/NotFound';
import { connect } from 'react-redux';
import {
  deletePostFromApi,
  addCommentApi,
  deleteCommentApi,
  getOnePostFromApi
} from '../actionCreators';

//Actual post => displays title, description and body
//Can edit and remove post
class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //Whem component mounts dispatch function to get data for that specific post
  componentDidMount() {
    this.props.getOnePostFromApi(this.props.match.params.postid);
  }

  //Takes id as parameter, calls function passed from Redux => redirect to homepage
  handleDelete() {
    this.props.deletePostFromApi(this.props.post.id);
    this.props.history.push('/');
  }

  //If post with this id doesn't exist, redirect to NotFound page
  render() {
    if (!this.props.post) {
      return <NotFound />;
    }
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <button
          //redirect to edit form
          onClick={() => this.props.history.push(`/edit/${this.props.post.id}`)}
        >
          Edit
        </button>
        <button onClick={this.handleDelete}>Delete</button>
        <br />
        <i>{this.props.post.description}</i>
        <p>{this.props.post.body}</p>
        <CommentList
          addComment={this.props.addCommentApi}
          deleteComment={this.props.deleteCommentApi}
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
  { deletePostFromApi, addCommentApi, deleteCommentApi, getOnePostFromApi }
);

export default connectToReduxStore(Post);
