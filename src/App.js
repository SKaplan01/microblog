import React, { Component } from 'react';
import Routes from './Routes';
import Header from './Header';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  addPost(post) {
    this.setState(st => ({ posts: [...st.posts, post] }));
  }

  editPost(post) {}

  render() {
    return (
      <div className="App">
        <Header />
        <Routes addPost={this.addPost} posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
