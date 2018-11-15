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
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/new"
          render={props => <FormContainer {...props} />}
        />
        <Route
          path="/edit/:postid"
          render={props => <FormContainer {...props} isEdit={true} />}
        />
        <Route path="/:postid" render={props => <Post {...props} />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
