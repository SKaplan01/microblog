import React, { Component } from 'react';
import Routes from './Routes';
import Header from './Header';
// import './App.css';
import uuid from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  addPost(post) {
    post.id = uuid();
    this.setState(st => ({ posts: [...st.posts, post] }));
  }

  deletePost(id) {
    let newPosts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts: newPosts });
  }

  editPost(post) {
    let index = this.state.posts.findIndex(p => p.id === post.id);
    console.log(index);
    console.log(post);
    this.setState(st => ({
      posts: [
        ...st.posts.slice(0, index),
        post,
        ...st.posts.slice(index + 1, st.posts.length)
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
        />
      </div>
    );
  }
}

export default App;
