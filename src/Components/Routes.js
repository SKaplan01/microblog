import React, { Component } from 'react';
import Home from './Home';
import BlogForm from './BlogForm';
import Post from '../Containers/Post';
import NotFound from './NotFound';
import FormContainer from '../Containers/FormContainer';
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
          render={props => <FormContainer {...props} />}
        />
        <Route
          path="/edit/:postid"
          render={props => <FormContainer {...props} isEdit={true} />}
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
