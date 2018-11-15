import React, { Component } from 'react';
import PostList from './PostList';

//Home shows header and renders list of posts
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h4>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </h4>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

export default Home;
