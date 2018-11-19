import React, { Component } from 'react';
import PostList from '../Containers/PostList';

//Home shows header and renders list of posts
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h4>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </h4>
        <PostList />
      </div>
    );
  }
}

export default Home;
