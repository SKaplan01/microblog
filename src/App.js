import React, { Component } from 'react';
import Routes from './Routes';
import Header from './Header';
// import './App.css';
import uuid from 'uuid/v4';

//App component holds state => array of posts which are objects
//App renders routes and header components
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  //Add post and set state
  addPost(post) {
    post.id = uuid();
    post.comments = [];
    this.setState(st => ({ posts: [...st.posts, post] }));
  }
  //Remove post from state
  deletePost(id) {
    let newPosts = this.state.posts.filter(post => post.id !== id);
    this.setState(st => ({ posts: newPosts }));
  }

  //Update state with new, edited post
  editPost(post) {
    let index = this.state.posts.findIndex(p => p.id === post.id);
    this.setState(st => ({
      posts: [
        ...st.posts.slice(0, index),
        post,
        ...st.posts.slice(index + 1, st.posts.length)
      ]
    }));
  }

  addComment(comment, postId) {
    //finds post in app state
    let index = this.state.posts.findIndex(p => p.id === postId);

    //copies post object with comment inserted into comments array
    let postWithComment = {
      ...this.state.posts[index],
      comments: [...this.state.posts[index].comments, comment]
    };

    //sets state with updated copy of post that includes comment
    this.setState(st => ({
      posts: [
        ...st.posts.slice(0, index),
        postWithComment,
        ...st.posts.slice(index + 1, st.posts.length)
      ]
    }));
  }

  deleteComment(commentId, postId) {
    //finds post in app state
    let postIndex = this.state.posts.findIndex(p => p.id === postId);

    //removes comment with matching id from list
    let comments = this.state.posts[postIndex].comments;
    let commentsAfterRemove = comments.filter(
      comment => comment.id !== commentId
    );
    let updatedPost = this.state.posts[postIndex];

    //sets comments for post to updated list (with comment removed)
    updatedPost.comments = commentsAfterRemove;

    //sets state with updated post
    this.setState(st => ({
      posts: [
        ...st.posts.slice(0, postIndex),
        updatedPost,
        ...st.posts.slice(postIndex + 1, st.posts.length)
      ]
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes
          addPost={this.addPost}
          deletePost={this.deletePost}
          editPost={this.editPost}
          posts={this.state.posts}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
        />
      </div>
    );
  }
}

export default App;
