import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

//Displays a list of comments associated with the parent Post
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(evt) {
    this.setState({ comment: evt.target.value });
  }

  //calls addComment (a prop from Post) to update comments for this post
  handleSubmit(evt) {
    evt.preventDefault();
    let comment = { text: this.state.comment, id: uuid() };
    this.props.addComment(comment, this.props.postId);
    this.setState({ comment: '' });
  }

  //calls deleteComment (prop from Post) with id for this comment and id for this post
  //evt.target.dataset.id comes from data-id attribute in button
  handleDelete(evt) {
    evt.preventDefault();
    this.props.deleteComment(this.props.postId, evt.target.dataset.id);
  }

  render() {
    const style = {
      margin: '25px',
      fontFamily: 'archivo'
    };

    const formStyle = {
      height: '50px',
      margin: '-25px'
    };

    const addCommentStyle = {
      margin: '5px',
      padding: '5px',
      height: '30px',
      width: '60px'
    };

    const listStyle = {
      margin: '-25px',
      padding: '10px',
      listStyleType: 'none'
    };

    const commentStyle = {
      marginTop: '10px',
      marginBottom: '10px',
      marginLeft: '-25px'
    };

    const deleteCommentStyle = {
      height: '20px',
      width: '50px',
      display: 'inline-block'
    };

    let comments;
    //if post has comments, create li element for each comment
    if (this.props.comments) {
      comments = this.props.comments.map(comment => {
        return (
          <li style={commentStyle} key={comment.id}>
            <FontAwesomeIcon
              style={deleteCommentStyle}
              data-id={comment.id}
              onClick={this.handleDelete}
              icon={faTrashAlt}
            />
            {comment.text}
          </li>
        );
      });
    }

    return (
      <div style={style}>
        <ul style={listStyle}>{comments ? comments : ''}</ul>
        <Form style={formStyle} onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="comment"
            value={this.state.comment}
            placeholder="New comment"
          />
          <Button style={addCommentStyle} outline color="success">
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </Form>
      </div>
    );
  }
}

export default CommentList;
