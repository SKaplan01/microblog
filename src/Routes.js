import React, { Component } from 'react';
import Home from './Home';
import Form from './Form';
import Post from './Post';
import NotFound from './NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/new" render={() => <Form />} />
        <Route path="edit/:postid" render={props => <Form {...props} />} />
        <Route path="/:postid" render={props => <Post {...props} />} />
        <Route render={() => <NotFound />} />
      </Switch>
    );
  }
}

export default Routes;
