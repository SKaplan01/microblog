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
          render={props => (
            <BlogForm
              {...props}
              addPost={this.props.addPost}
              cancel={() => props.history.push('/')}
            />
          )}
        />
        <Route
          path="/edit/:postid"
          render={props => (
            <BlogForm
              {...props}
              editPost={this.props.editPost}
              post={this.props.posts.find(
                post => props.match.params.postid === post.id
              )}
              isEdit={true}
              cancel={() => props.history.push('/')}
            />
          )}
        />
        <Route
          path="/:postid"
          render={props => (
            <Post
              {...props}
              deletePost={this.props.deletePost}
              post={this.props.posts.find(
                post => props.match.params.postid === post.id
              )}
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
