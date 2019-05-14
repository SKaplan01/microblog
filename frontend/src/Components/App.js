import React, { Component } from 'react';
import Routes from './Routes';
import Header from './Header';
import uuid from 'uuid/v4';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faCheck,
  faBlog,
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

library.add(faTrashAlt, faCheck, faThumbsUp, faThumbsDown);

//App renders routes and header components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
