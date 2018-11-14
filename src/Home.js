import React, { Component } from 'react';
import PostList from './PostList';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
