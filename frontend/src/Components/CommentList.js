import React, { Component } from 'react';
import uuid from 'uuid/v4';

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
    let comments;
    //if post has comments, create li element for each comment
    if (this.props.comments) {
      comments = Object.keys(this.props.comments).map(key => {
        return (
          <li key={key}>
            <button data-id={key} onClick={this.handleDelete}>
              X
            </button>
            {this.props.comments[key]}
          </li>
        );
      });
    }

    return (
      <div>
        <ul>{comments ? comments : ''}</ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment" />
          <input
            onChange={this.handleChange}
            type="text"
            name="comment"
            value={this.state.comment}
            placeholder="New comment"
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default CommentList;
