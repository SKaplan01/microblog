import React, { Component } from 'react';
import PostList from '../Containers/PostList';

//Home shows header and renders list of posts
class Home extends Component {
  render() {
    const style = {
      margin: '25px',
      fontFamily: 'archivo'
    };
    return (
      <div style={style} className="Home">
        <h2>
          Welcome to Microblog, our innovative site for communicating on the
          information superhighway.
        </h2>
        <PostList />
      </div>
    );
  }
}

export default Home;
