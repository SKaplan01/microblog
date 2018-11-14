import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//Actual post => displays title, description and body
//Can edit and remove post
class Post extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //Takes id as parameter, calls function passed down from App => redirect to homepage
  handleDelete(id) {
    this.props.deletePost(id);
    this.props.history.push('/');
  }

  //Find post that matches id in url params
  //If no post is found redirect to NotFound page
  render() {
    let post = this.props.posts.find(
      post => post.id === this.props.match.params.postid
    );

    if (!post) {
      return <Redirect to="/notFound" />;
    }
    return (
      <div>
        <h1>{post.postTitle}</h1>
        <button
          //redirect to edit form
          onClick={() =>
            this.props.history.push(`/edit/${post.id}`, {
              postToEdit: post
            })
          }
        >
          Edit
        </button>
        <button onClick={() => this.handleDelete(post.id)}>Delete</button>
        <br />
        <i>{post.postDescription}</i>
        <p>{post.postBody}</p>
      </div>
    );
  }
}

export default Post;
