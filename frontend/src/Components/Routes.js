import React, { Component } from 'react';
import Home from './Home';
import Post from '../Containers/Post';
import NotFound from './NotFound';
import AddPostContainer from '../Containers/AddPostContainer';
import EditPostContainer from '../Containers/EditPostContainer';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/new"
          render={props => <AddPostContainer {...props} />}
        />
        <Route
          path="/edit/:postid"
          render={props => <EditPostContainer {...props} isEdit={true} />}
        />
        <Route path="/:postid" render={props => <Post {...props} />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
