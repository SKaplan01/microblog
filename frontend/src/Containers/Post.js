import React, { Component } from 'react';
import CommentList from '../Components/CommentList';
import NotFound from '../Components/NotFound';
import { connect } from 'react-redux';
import {
  deletePostFromApi,
  addCommentApi,
  deleteCommentApi,
  getOnePostFromApi,
  addVote
} from '../actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

//Actual post => displays title, description and body
//Can edit and remove post
class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.vote = this.vote.bind(this);
  }

  //When component mounts dispatch function to get data for that specific post
  componentDidMount() {
    this.props.getOnePostFromApi(this.props.match.params.postid);
  }

  //Takes id as parameter, calls function passed from Redux => redirect to homepage
  handleDelete() {
    this.props.deletePostFromApi(this.props.post.id);
    this.props.history.push('/');
  }

  vote(id, direction) {
    this.props.addVote(id, direction);
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

    const voteStyle = {
      margin: '2px'
    };

    const upVoteStyle = {
      margin: '5px',
      color: 'green',
      cursor: 'pointer'
    };

    const downVoteStyle = {
      margin: '5px',
      color: 'red',
      cursor: 'pointer'
    };

    const voteDiv = {
      margin: '5px'
    };
    if (!this.props.post) {
      return <NotFound />;
    }
    return (
      <div style={style}>
        <h1>{this.props.post.title}</h1>
        <br />
        <h4>
          <i>{this.props.post.description}</i>
        </h4>
        <p>{this.props.post.body}</p>
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
        <p style={voteStyle}>Votes: {this.props.post.votes}</p>
        <div style={voteDiv}>
          <FontAwesomeIcon
            style={upVoteStyle}
            onClick={() => this.vote(this.props.post.id, 'up')}
            icon={faThumbsUp}
          />
          <FontAwesomeIcon
            style={downVoteStyle}
            onClick={() => this.vote(this.props.post.id, 'down')}
            icon={faThumbsDown}
          />
        </div>
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
  {
    deletePostFromApi,
    addCommentApi,
    deleteCommentApi,
    getOnePostFromApi,
    addVote
  }
);

export default connectToReduxStore(Post);
