import React, { Component } from 'react';
import CommentList from '../Components/CommentList';
import NotFound from '../Components/NotFound';
import { connect } from 'react-redux';
import { deletePost, addComment, deleteComment } from '../actionCreators';
import { Button } from 'reactstrap';

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
        <h1>{this.props.post.postTitle}</h1>
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
          <i>{this.props.post.postDescription}</i>
        </h4>
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
