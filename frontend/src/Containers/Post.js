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
import { Button } from 'reactstrap';

//Actual post => displays title, description and body
//Can edit and remove post
class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //Whemncomponent mounts dispatch function to get data for that specific post
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
    const style = {
      margin: '25px',
      fontFamily: 'archivo',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column'
    };

    const buttonDiv = {
      display: 'flex',
      flex: '1',
      flexDirection: 'row'
    };

    const buttonStyle = {
      margin: '2px',
      padding: '5px',
      width: '75px'
    };

    if (!this.props.post) {
      return <NotFound />;
    }
    return (
      <div style={style}>
        <h1>{this.props.post.title}</h1>
        <div style={buttonDiv}>
          <Button
            style={buttonStyle}
            outline
            color="primary"
            //redirect to edit form
            onClick={() =>
              this.props.history.push(`/edit/${this.props.post.id}`)
            }
          >
            Edit
          </Button>
          <Button
            style={buttonStyle}
            outline
            color="danger"
            onClick={this.handleDelete}
          >
            Delete
          </Button>
        </div>
        <br />
        <h4>
          <i>{this.props.post.description}</i>
        </h4>
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
