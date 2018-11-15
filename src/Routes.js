import React, { Component } from 'react';
import Home from './Home';
import BlogForm from './BlogForm';
import Post from './Post';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';

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
            <BlogForm
              {...props}
              editPost={this.props.editPost}
              posts={this.props.posts}
              isEdit={true}
            />
          )}
        />
        <Route
          path="/:postid"
          render={routerProps => (
            <Post
              {...routerProps}
              deletePost={this.props.deletePost}
              posts={this.props.posts}
              post={this.props.posts.find(...routerProps.match.params.postId)}
              addComment={this.props.addComment}
              deleteComment={this.props.deleteComment}
            />
          )}
        />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
