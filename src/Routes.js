import React, { Component } from 'react';
import Home from './Home';
import BlogForm from './BlogForm';
import Post from './Post';
import NotFound from './NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home posts={this.props.posts} />}
        />
        <Route
          exact
          path="/new"
          render={props => <BlogForm {...props} addPost={this.props.addPost} />}
        />
        <Route
          path="/edit/:postid"
          render={props => (
            <BlogForm {...props} editPost={this.props.editPost} />
          )}
        />
        <Route
          path="/:postid"
          render={props => <Post {...props} posts={this.props.posts} />}
        />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
