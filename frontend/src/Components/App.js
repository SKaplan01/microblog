import React, { Component } from 'react';
import Routes from './Routes';
import Header from './Header';
import uuid from 'uuid/v4';

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
